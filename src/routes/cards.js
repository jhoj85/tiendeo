const {Router} = require('express');
const router = Router();

const {getCard, createCard, deleteCard, updateCard } = require('../controllers/cards.controller');

router.route('/')
    .get(getCard)
    .post(createCard);

router.route('/:id')
    .delete(deleteCard);

router.route('/:id')
    .put(updateCard);

module.exports = router;