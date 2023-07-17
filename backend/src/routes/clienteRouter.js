import { Router } from "express";
import { clienteController } from "../controllers/clienteController.js";

const router = Router();

router.get("/clientes", clienteController.getClientes);
router.post("/cargar-cliente", clienteController.registerCliente);
router.get("/consultar-cliente/:dni", clienteController.findCliente);
router.put("/actualizar-cliente/:id", clienteController.updateCliente);
router.delete("/eliminar-cliente/:id", clienteController.deleteCliente);
export default router;