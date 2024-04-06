import admin from "./admin";
import pub from "./pub";

const mutations = {
    admin,
    pub,
}

export default mutations;

export type MutationType = typeof mutations;
