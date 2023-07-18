import express from 'express';

import {login} from '../Component/Login.js'
import { signup } from '../Component/Singup.js';


const Routes = express.Router();
Routes.get('/login',login);
Routes.post('/signup',signup);



export default Routes;