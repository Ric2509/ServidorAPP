const router = require('express-promise-router')();
const userController = require('../controllers/usercontroller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'User': (POST): localhost:3000/api/users
router.post('/users', userController.createUser);

// ==> Rota responsável por listar todos os 'Users': (GET): localhost:3000/api/users
router.get('/users', userController.listAllProducts);

// ==> Rota responsável por selecionar 'User' pelo 'Id': (GET): localhost:3000/api/users/:id
router.get('/users/:id', userController.findUserById);

// ==> Rota responsável por atualizar 'User' pelo 'Id': (PUT): localhost: 3000/api/users/:id
router.put('/users/:id', userController.updateUserById);

// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/users/:id
router.delete('/users/:id', userController.deleteUserById);


module.exports = router;