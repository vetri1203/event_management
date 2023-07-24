import express from 'express';

import {login} from '../Component/Login.js'
import { signup } from '../Component/Singup.js';
import { mahal } from '../Component/Mahal.js';
import { allMahal } from '../Component/AllMahal.js';
import { searchMahalByName } from '../Component/SearchMahal.js';

const Routes = express.Router();
Routes.get('/login',login);
Routes.post('/signup',signup);
Routes.post('/mahal',mahal);
Routes.get('/all',allMahal);
Routes.get('/search',searchMahalByName);




export default Routes;



 /*//mar
    mahal
        seat
        image
        carparking
        stage size
        room
        rate and booking details
    catring
        dinnig system 2types
    photo,makeup,decoration,cars
        details
            contact
            amount
            images
            link





    */