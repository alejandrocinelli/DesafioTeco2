import { Cliente } from "../models/cliente.models.js";
import MongoDao from "./mongo.dao.js";

let instance 

export default class ClienteMongoDao extends MongoDao{
    constructor(){
        super(Cliente);
    }
static getInstance(){
    if(!instance) {
        instance = new ClienteMongoDao();
        console.log("creando nueva instancia");
    }
    return instance;
}
}
