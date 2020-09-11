const db = require("../config/database");



// ==> Método responsável por criar um novo 'Product':
exports.createUser = async (req, res) => {
  const { username, userpass, useremail } = req.body;
  const { rows } = await db.query(
    "INSERT INTO users (username, userpass, useremail) VALUES ($1, $2, $3)",
    [username, userpass, useremail]
  );

  res.status(201).send({
    message: "User added successfully!",
    body: {
      product: {username, userpass, useremail }
    },
  });
};




// ==> Método responsável por listar todos os 'Products':
exports.listAllProducts = async (req, res) => {
  // Espera resposta da consulta
  const response = await db.query('SELECT * FROM users ORDER BY userid ASC');
  res.status(200).send(response.rows);
};




// ==> Método responsável por selecionar 'User' pelo 'Id':
exports.findUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM users WHERE userid = $1', [userId]);
  res.status(200).send(response.rows);
} 



// ==> Método responsável por atualizar um 'User' pelo 'Id':
exports.updateUserById = async (req, res) => {
  
  // Diz que é parametro
  const userId = parseInt(req.params.id);
  
  // Diz que o que se passa de dado a ser escrito
  const { username, userpass, useremail } = req.body;

  const response = await db.query(
    "UPDATE users SET username = $1, userpass = $2, useremail = $3 WHERE userid = $4",
    [username, userpass, useremail, userId]
  );

  res.status(201).send({
    message: "User updated successfully!",
    body: {
      user: {username, userpass, useremail }
    },
  });
};


// ==> Método responsável por excluir um 'User' pelo 'Id':
exports.deleteUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  await db.query('DELETE FROM users WHERE userid = $1', [
    userId
  ]);

  res.status(200).send({ message: 'User deleted successfully!', userId });
};