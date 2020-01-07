const express = require("express");
const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users");

const { protect, authorize } = require('../middlewares/auth');


const router = express.Router();
router
    .route("/")
    .get(protect, authorize('admin'), getUsers)
    .post(protect, authorize('admin'), createUser);
router
    .route("/:id")
    .get(protect, authorize('admin'), getUser)
    .put(protect, authorize('admin'), updateUser)
    .delete(protect, authorize('admin'), deleteUser);

module.exports = router;
