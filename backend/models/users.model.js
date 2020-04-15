const connection = require('./db.model');





// --- Get All Users

const getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users`)
            .then((users) => resolve(users))
            .catch((error) => reject(error));
    });
};







// --- API --- EXPORTS

module.exports = {
    getUsers: getUsers
};