import ClienteMongoDao from "./clienteMongo.dao.js";

export default class ClienteDaoFactory {
    static getDao(db) {
        switch(db) {
            case "mongo":
                return ClienteMongoDao.getInstance();
            case "mysql": 
            return new Error ("No implementado");
            default:
                return ClienteMongoDao.getInstance();
        }
    }
}