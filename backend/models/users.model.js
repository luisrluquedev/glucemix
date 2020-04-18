const connection = require('./db.model');


// --- Crud: Create new User

createNewUser = (username, password, email, name, lastname, phone, address, registerdate) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users (userName, password, email, name, lastname, phone, address, registerdate) VALUE (?, ?, ?, ?, ?, ?, ?, ?);`, [username, password, email, name, lastname, phone, address, registerdate])
            .then(result => resolve(result))
            .cath(error => reject("Error Create New User" + error));
    });
};


// --- cRud: READ all users. Get All Users

const getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users`)
            .then((users) => resolve(users))
            .catch((error) => reject("Error get all users: " + error));
    });
};

// --- cRud: READ only one user. Get User by Id.

const getUserById = (Id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users WHERE id = ${Id} `)
            .then((users) => resolve(users))
            .catch((error) => reject("Error User by Id: " + error));
    });
};

// --- crUd - UPDATE user by id

updateUserById = (ID, username, password, email, name, lastname, phone, address, registerdate) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE users SET 
        username = ?,
        password = ?,
        email = ?,
        name = ?,
        lastname = ?,
        phone = ?,
        address = ?,
        registerdate = ?
        WHERE id = ${ID};`, [username, password, email, name, lastname, phone, address, registerdate])
            .then(resolve(result))
            .catch(reject("Error update user by id" + error));
    });
};

// --- cruD - Delete user by id

deleteUserById = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM users WHERE id = ${ID}`)
            .then(result => resolve(result))
            .catch(error => reject("Error delete user by id" + error));
    });
};



// --- API --- EXPORTS

module.exports = {
    createNewUser: createNewUser,
    getUsers: getUsers,
    getUserById: getUserById,
    updateUserById: updateUserById,
    deleteUserById: deleteUserById
};