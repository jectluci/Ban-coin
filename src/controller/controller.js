const pool = require("../db");

const getAllClients = async (req, res) => {
    try {
        const allClients = await pool.query("Select * from clients");
        res.json(allclients.rows);
    } catch (e) {
        print(e);
    }
};

const getClient = async (req, res) => {
    res.send("retrieve all clientes");
};
const createClient = async (req, res) => {
    res.send("create client");
};
const updateClient = async (req, res) => {
    res.send("update client");
};

module.exports = { getAllClients, getClient, createClient, updateClient };
