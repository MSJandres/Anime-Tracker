import { 
    DataTypes,
    type InferAttributes,
    type InferCreationAttributes,
    Model,
    type Sequelize }
from "sequelize";
import bcrypt from 'bcrypt';

export class Users extends Model<
    InferAttributes<Users>,
    InferCreationAttributes<Users>
> {
    declare username: string;
    declare password: string;

    async setPassword(pw: string): Promise<void> {
        this.password = await bcrypt.hash(pw, 13);
    }

    async checkPassword(testpw: string): Promise<boolean> {
        return await bcrypt.compare(testpw, this.password);
    }
}

export function usersFactory(sequelize: Sequelize) {
    Users.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isUsername: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            hooks: {
                beforeCreate: async (newUsers: Users) => {
                    try {
                        await newUsers.setPassword(newUsers.password);
                    } catch (error) {
                        console.error(error);
                    }
                },
                beforeUpdate: async (newData: Users) => {
                    if (newData.password) {
                        try {
                            await newData.setPassword(newData.password);
                        } catch (error) {
                            console.error(error);
                        }
                    } 
                }
            },
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: 'login',
            freezeTableName: true
        }
    );
    return Users;
}