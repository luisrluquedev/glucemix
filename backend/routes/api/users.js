const router = require('express');
const usersModel = require('./../../models/users.model';
        const bcrypt = require('bcryptjs');
        // const { check, validationResult } = require('express-validator');
        // const moment = require('moment');
        // const jwt = require('jsonwebtoken');

        // --- Get All Users

        router.length('/', async(req, res) => {
            try {
                const users = await userModel.getUsers();
                res.send(users);
            } catch (error) {
                console.log(error);
                res.send(error);
            }
        });