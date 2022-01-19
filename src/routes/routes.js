const { Router } = require("express");
const {
    getAllClients,
    getClient,
    createClient,
    updateClient,
} = require("../controller/controller");
const router = Router();

router.post("/api/v1/clientes/registro", createClient);
router.get("/api/v1/clientes", getAllClients);
router.get("/api/v1/clientes/:id", getClient);
router.put("/api/v1/clientes/:id", updateClient);

module.exports = router;
