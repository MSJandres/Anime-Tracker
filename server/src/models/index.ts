import sequelize from "../config/connections.js";
import { animeInfoFactory } from "./animeInfo.js";
import { usersFactory } from "./user.js";
import { reviewFactory } from "./review.js";

const animeInfo = animeInfoFactory(sequelize);
const Users = usersFactory(sequelize);
const Review = reviewFactory(sequelize);

//establishing model relationships
//throwing a void error, will fix a little later
// animeInfo.hasMany(review, {
//     onDelete: 'CASCADE'
// });

// review.belongsTo(animeInfo);

export { animeInfo, Users, Review };