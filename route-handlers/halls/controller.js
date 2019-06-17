const db = require ('../../db/connect');

// ROUTE
// /halls
const getHalls = (req, res, next) => {
    db.query('SELECT * FROM halls', (err, result) => {
    if (err) {
        return next(err);
    }
    res.send(result.rows)
    });
}

// getHallById
const getHallById = (req, res, next) => {
    console.log("getHallById");
    const hallId = req.params;
    db.query("SELECT * FROM halls WHERE hall_id = $1;", [hallId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

// createHall
const createHall = (req, res, next) => {
    console.log("createHall");
    const bodyData = req.body;
    db.query("INSERT INTO halls (hall_id, hall_name, hall_address, size) VALUES ($1, $2, $3, $4);", [bodyData.hall_id, bodyData.hall_name, bodyData.hall_address, bodyData.size], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

// updateHall
const updateHall = (req, res, next) => {
    console.log("updateHall");
    const hallId = req.params;
    const bodyData = req.body;
    db.query("UPDATE halls SET hall_name = $1, hall_address = $2, size = $3 WHERE hall_id = $4;", [bodyData.hall_name, bodyData.hall_address, bodyData.size, hallId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

// deleteHall
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
    getHallById,
    createHall,
    updateHall,
    deleteHall
};