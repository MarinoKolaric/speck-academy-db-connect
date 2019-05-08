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
    const hall_id = req.params;
    db.query('SELECT * FROM halls WHERE hall_id=1$', [hall_id], (err, result) => {
    if (err) {
        return next(err);
    }
    res.send(result.rows)
    });
}

// createHall
const createHall = (req, res, next) => {
    db.query("INSERT INTO halls (hall_id, hall_name, hall_address, size) VALUES ('49871009-5ccc-4ee8-a7f6-3473f9601353', 'generic_name', 'generic_add', 12345);", (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
 }

// updateHall
const updateHall = (req, res, next) => {
    const hall_id = req.params;
    db.query('UPDATE halls SET hall_name = novo ime, hall_address = nova adresa, size = 99 WHERE hall_id=$1', [hall_id], (err, result) => {
    if (err) {
        return next(err);
    }
    res.send(result.rows)
    });
}
// deleteHall


module.exports = {
    getHalls,
    getHallById,
    createHall,
    updateHall

};