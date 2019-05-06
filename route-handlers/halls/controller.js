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
    const hallId = req.params;
    db.query('SELECT * FROM halls WHERE id=$1', [hallId], (err, result) => {
    if (err) {
        return next(err);
    }
    res.send(result.rows)
    });
}
// createHall
// updateHall
// deleteHall


module.exports = {
    getHalls,
    getHallById
};