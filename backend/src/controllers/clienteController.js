import ClienteDaoFactory from "../daos/clienteDaoFactory.js";
import { Cliente } from "../models/cliente.models.js";
import dotenv from "dotenv";

dotenv.config();

const daoCliente = ClienteDaoFactory.getDao(process.env.DB);

const getClientes = async (req, res) => {

    try {
        const clientes = await daoCliente.getAll();
        if(!clientes) {
            return res.status(404).json({ error: "No hay clientes" })
        }
       return res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

 const registerCliente = async (req, res) => {
    
    const { nombre, apellido, sex, dni } = req.body;

    try {
        
        const apellidoExits = await Cliente.findOne({ apellido });
        const dniExits = await Cliente.findOne({ dni });

        if (apellidoExits || dniExits) {
            return res.status(400).json({ error: "El apellido  o el DNI ya existe" });
        }

        const cliente = await daoCliente.create({nombre, apellido, sex, dni});
        res.status(201).json(cliente);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

   }

   const findCliente = async (req, res) => { 
    const  {dni}  = req.params;
    
    try {
        const clienteExist = await daoCliente.getByFilter({ dni });
        if (!clienteExist) {
            const error = new Error("El cliente no existe");
            return res.status(404).json({ error : error.message});
        }

        res.status(200).json(clienteExist);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCliente = async (req, res) => {
    const { id } = req.params;
    const {nombre , sex , apellido , dni} = req.body;

    try {
        let clienteExist = await daoCliente.getById(id);
        if (!clienteExist) {
            return res.status(404).json({ error: "El cliente no existe" });
        }
        clienteExist = await daoCliente.update(id, {
            nombre , sex , apellido , dni
        });
        // TODO hice este parche porque no me devolvia el cliente actualizado revisar
        if(clienteExist.acknowledged === false) {
            return res.status(400).json({ error: "No se pudo actualizar el cliente vuelva a intentar" });
        }
        if(clienteExist.acknowledged === true) {
            return res.status(200).json({ message: "Cliente actualizado" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await daoCliente.delete(id);
        if (!cliente) {
            return res.status(404).json({ error: "El cliente no existe" });
        }
        res.status(200).json({ message: "Cliente eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const clienteController = { getClientes , registerCliente ,
     findCliente , updateCliente , deleteCliente};    