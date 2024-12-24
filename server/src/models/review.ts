import {
    type CreationOptional,
    DataTypes,
    ForeignKey,
    type InferAttributes,
    type InferCreationAttributes,
    Model,
    type Sequelize
}
    from "sequelize";
import { animeInfo } from "./animeInfo";

export class Review extends Model<
    InferAttributes<Review>,
    InferCreationAttributes<Review>
> {
    declare id: CreationOptional<number>;
    declare rating: number;
    declare heading: string;
    declare desc: string;
    declare cardId: ForeignKey<animeInfo['id']>;
}

export function reviewFactory(sequelize: Sequelize) {
    Review.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            heading: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    isHeading: true
                }
            },
            desc: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    isHeadingProvided(value: boolean) {
                        if (value === true && !this.heading) {
                            throw new Error("Cannot leave Title blank and only provide a Description. Please fill out a title before proceeding.")
                        }
                    }
                }
            },
            cardId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            freezeTableName: true,
            timestamps: true,
            underscored: true,
            modelName: 'review'
        }

    );

    return Review;
};