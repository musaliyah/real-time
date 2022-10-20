const router = require('express').Router();

const {
    getAllThought,
    getThoughtById, 
    updateThought, 
    createThought,
    deleteThought,
    deleteReaction,
    createReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought).post(createThought);

router.route('./:id').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId.rections').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;