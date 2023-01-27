import express from "express";
import {createUser, getUsers, deleteUser, getUser, updateUser} from "../controller/users.controller.js";
import { check } from 'express-validator';
import validate from "../validation/user.validation.js";

const usersRoutes = express.Router();

const validationRules = [check('email', 'Invalid email').isEmail(),
  check('password', 'Password must be at least 8 characters').isLength({ min: 8 }),
]

usersRoutes.route('/')
  .post(validate(validationRules),createUser)
  .get(getUsers)

usersRoutes.route('/:id')
  .delete(deleteUser)
  .get(getUser)
  .put(validate(validationRules),updateUser)

export default usersRoutes;
