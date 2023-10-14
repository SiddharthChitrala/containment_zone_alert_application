const express = require('express');
const router = express.Router();
const authController = require('../auth/authController');
const submitController = require('../zone-details/zoneController')

//  Role based login and register
router.post('/login', authController.loginAuthControllerFn);
router.post('/register', authController.createAuthControllerFn);

// Getting or deleting any user / admin 
router.get('/data', authController.getAllUsersControllerFn);
router.delete('/data/:id', authController.deleteUserByIdControllerFn);

// Submit the details
router.post('/details/submit',submitController.createSubmitControllerFn);
router.get('/details/retrieve',submitController.getSubmitControllerFn);
router.patch('/details/update/:id',submitController.updateSubmitControllerFn)
router.delete('/details/delete/:id',submitController.deleteSubmitControllerFn)


module.exports = router;