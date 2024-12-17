import { 
    type CreationOptional,
    DataTypes,
    type InferAttributes,
    type InferCreationAttributes,
    Model,
    type Sequelize }
from "sequelize";

export class animeInfo extends Model<
    InferAttributes<animeInfo>,
    InferCreationAttributes<animeInfo>
> {
    declare id: CreationOptional<number>;
    declare image: string;
    declare title: string;
    declare year: number;
    declare genre: string;
    declare review: number;
    declare topAnime: boolean;
}

export function animeInfoFactory(sequelize: Sequelize) {
    animeInfo.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            year: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: false
            },
            review: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            topAnime: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        },
        {
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: 'animeCard',
            freezeTableName: true
        }
    )
}