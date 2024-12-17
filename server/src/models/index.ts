import sequelize from "../config/connections.js";
import { animeInfoFactory } from "./animeInfo.js";
import { usersFactory } from "./user.js";

const animeInfo = animeInfoFactory(sequelize);
const Users = usersFactory(sequelize);
export { animeInfo, Users };