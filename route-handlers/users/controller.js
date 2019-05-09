const db = require("../../db/connect");

const getUsers = (req, res, next) => {
    console.log("getUsers");
    db.query("SELECT * FROM users", (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const getUser = (req, res, next) => {
    console.log("getUser");
    const userId = req.params;
    db.query("SELECT * FROM users WHERE user_id = $1;", [userId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const postUser = (req, res, next) => {
    console.log("postUser");
    const bodyData = req.body;
    db.query("INSERT INTO users (user_id, username, email) VALUES ($1, $2, $3);", [bodyData.user_id, bodyData.username, bodyData.email,], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const updateUser = (req, res, next) => {
    console.log("updateUser");
    const userId = req.params;
    const bodyData = req.body;
    db.query("UPDATE users SET username = $1, email = $2  WHERE user_id = $3;", [bodyData.username, bodyData.email, userId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}

const deleteUser = (req, res, next) => {
    console.log("deleteUser");
    const userId = req.params;
    db.query("DELETE FROM users WHERE user_id = $1;", [userId.input], (err, result) => {
            if (err) {
            return next(err);
        }
        res.send("empty");
    });
}

module.exports = {
    getUsers,
    getUser,
    postUser,
    updateUser, 
    deleteUser
};