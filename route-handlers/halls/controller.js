const db = require("../../db/connect");

const getHalls = (req, res, next) => {
    db.query("SELECT * FROM halls", (err, result) => {
//        db.query("SELECT NOW()", (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const getHall = (req, res, next) => {
    const hallId = req.params;
    db.query("SELECT * FROM halls WHERE hall_id = $1;", [hallId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const postHall = (req, res, next) => {
    db.query("INSERT INTO halls (hall_id, name, address, capacity) VALUES ('49871009-5ccc-4ee8-a7f6-3473f9601353', 'dummy2', 'dummy3', 12345);", (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const updateHall = (req, res, next) => {
    db.query("UPDATE halls SET name = 'new hall name', address = 'new address', capacity = 33 WHERE hall_id = 'b2aa69a6-0d07-48b1-a7e8-5cb32a972bbc';", (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const deleteHall = (req, res, next) => {
    db.query("DELETE FROM halls WHERE hall_id = 'b2aa69a6-0d07-48b1-a7e8-5cb32a972bbc';", (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

module.exports = {
    getHalls,
    getHall,
    postHall,
    updateHall
};