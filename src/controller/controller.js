const pool = require("../db");

const getAllClients = async (req, res) => {
    const allClients = await pool.query("Select * from clientes");
    res.json(allClients.rows);
};

const getClient = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM clientes WHERE id = $1", [
        id,
    ]);
    if (result.rows.length === 0)
        return res.status(404).json({ message: "client no found" });
    res.json(result.rows[0]);
};
const createClient = async (req, res) => {
    const { fname, lname, address, birthdate } = req.body;
    const result = await pool.query(
        "execute registrar(fname =$1, lname=$2, address=$3, birthdate=$4)",
        [fname, lname, address, birthdate]
    );
};
const updateClient = async (req, res) => {
    const { id } = req.params;
    const { status, fname, lname, address, birthdate } = req.body;
    const result = await pool.query(
        "UPDATE clientes SET status= $1, fname = $2, lname = $3, address = $4, birthdate = $5 WHERE id = $6 RETURNING *",
        [status, fname, lname, address, birthdate, id]
    );
    if (result.rows.length === 0)
        return res.status(404).json({ message: "client not found" });
    return res.json(result.rows[0]);
};

module.exports = { getAllClients, getClient, createClient, updateClient };
