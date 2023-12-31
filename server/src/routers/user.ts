import Router from '@koa/router';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = new Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;