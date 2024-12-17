import sequelize from "../config/connections.js";
import { animeInfoFactory } from "./animeInfo.js";
import { usersFactory } from "./user.js";

const animeInfo = animeInfoFactory(sequelize);
const users = usersFactory(sequelize);
export { animeInfo, users };