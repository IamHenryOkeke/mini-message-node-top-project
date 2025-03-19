const {pool} = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function getMessageByID(id) {
  const { rows } = await pool.query(
    `SELECT * FROM messages WHERE id = $1;`, 
    [id]
  );
  return rows[0];
}

async function insertMessage(message) {
  await pool.query(`INSERT INTO messages (text, "user", added) VALUES ($1, $2, NOW())`, [message.text, message.user]);
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageByID
};
