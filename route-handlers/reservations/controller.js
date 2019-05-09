const db = require("../../db/connect");

const getReservations = (req, res, next) => {
    console.log("getReservations");
    db.query("SELECT * FROM reservations", (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const getReservation = (req, res, next) => {
    console.log("getReservation");
    const reservationId = req.params;
    db.query("SELECT * FROM reservations WHERE reservation_id = $1;", [reservationId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const postReservation = (req, res, next) => {
    console.log("postReservation");
    const bodyData = req.body;
    db.query("INSERT INTO reservations (reservation_id, reservationname, email) VALUES ($1, $2, $3);", [bodyData.reservation_id, bodyData.reservationname, bodyData.email,], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const updateReservation = (req, res, next) => {
    console.log("updateReservation");
    const reservationId = req.params;
    const bodyData = req.body;
    db.query("UPDATE reservations SET reservationname = $1, email = $2  WHERE reservation_id = $3;", [bodyData.reservationname, bodyData.email, reservationId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const deleteReservation = (req, res, next) => {
    console.log("deleteReservation");
    const reservationId = req.params;
    db.query("DELETE FROM reservations WHERE reservation_id = $1;", [reservationId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send("empty");
    });
}

module.exports = {
    getReservations,
    getReservation,
    postReservation,
    updateReservation, 
    deleteReservation
};