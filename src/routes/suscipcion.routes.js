import {Router} from 'express';
import suscripcionController from '../controllers/suscripcion.controllers';

const router = Router();

const {getPrueba} = suscripcionController

//creamos las rutas
router.route('/').get(getPrueba);

export default router;