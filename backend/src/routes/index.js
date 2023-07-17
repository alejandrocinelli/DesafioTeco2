import {Router} from 'express';
import clienteRouter from './clienteRouter.js';
import {configureErrorController} from '../controllers/errorController.js';
const router = Router();

router.use("/", clienteRouter);
//router.get("*", configureErrorController.errorReq)

export default router;