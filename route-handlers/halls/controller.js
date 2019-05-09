const db = require("../../db/connect");

const getHalls = (req, res, next) => {
    console.log("getHalls");
    db.query("SELECT * FROM halls", (err, result) => {
//        db.query("SELECT NOW()", (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const getHall = (req, res, next) => {
    console.log("getHall");
    const hallId = req.params;
    db.query("SELECT * FROM halls WHERE hall_id = $1;", [hallId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const postHall = (req, res, next) => {
    console.log("postHall");
    const bodyData = req.body;
    db.query("INSERT INTO halls (hall_id, name, address, capacity) VALUES ($1, $2, $3, $4);", [bodyData.hall_id, bodyData.name, bodyData.address, bodyData.capacity], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const updateHall = (req, res, next) => {
    console.log("updateHall");
    const hallId = req.params;
    const bodyData = req.body;
    db.query("UPDATE halls SET name = $1, address = $2, capacity = $3 WHERE hall_id = $4;", [bodyData.name, bodyData.address, bodyData.capacity, hallId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const deleteHall = (req, res, next) => {
    console.log("deleteHall");
    const hallId = req.params;
    db.query("DELETE FROM halls WHERE hall_id = $1;", [hallId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send("empty");
    });
}

module.exports = {
    getHalls,
    getHall,
    postHall,
    updateHall, 
    deleteHall
};