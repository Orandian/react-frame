import admin from "./admin";
import user from "./user";
import auth from "./auth";
import pub from "./pub";

const mutations = {
    auth,
    admin,
    user,
    pub,
}

export default mutations;

export type MutationType = typeof mutations;
