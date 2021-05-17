const cardCtrl = {};

const Card = require('../models/Card');

cardCtrl.getCard = async (req, res) =>{
    try {
        const cards = await Card.find();
        res.json(cards)
    }
    catch (err) {
        res.status(400).json({
            error: err
        });

    }
};

cardCtrl.createCard = async (req,res) =>{
    try {
        const {titulo, descripcion, url} = req.body;

        const newCard = new Card({titulo, descripcion, url});
        await newCard.save();
        res.json('Card Creada');
    }
    catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

cardCtrl.updateCard = async (req,res) =>{
    try {
        const { id } = req.params;
        const {titulo, descripcion, url} = req.body;

        //const newCard = new Card({titulo, descripcion, url});
       await Card.findByIdAndUpdate(id,{titulo, descripcion, url});
        res.json('Card Actualizada');
    }
    catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

cardCtrl.deleteCard = async (req, res) =>{
        const { id } = req.params;
        await Card.findByIdAndRemove(id)
        res.json('Cad Borrada');
}

module.exports = cardCtrl