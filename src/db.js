const { Pool } = require("pg");
const pool = new Pool({
    user: "ject",
    password: "211118",
    host: "localhost",
    port: "5432",
    database: "banclient",
});

module.exports = pool;
