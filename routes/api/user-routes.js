const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    updateUser,
    createUser,
    deleteUser,
    deleteFriend,
    addFriend
} = require('../../controllers/user-controller');

router.route('/').get(getAllUser).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/friendId').post(addFriend).delete.apply(deleteFriend);

module.exports = router;