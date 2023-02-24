const express = require("express");
const router1 = express.Router();
const { getUser, postUser } = require("../controller/organisation")


router1.get('/',getUser);
router1.post('/',postUser)

module.exports = router1;    