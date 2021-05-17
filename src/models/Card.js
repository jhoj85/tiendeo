const { Schema, model } = require('mongoose');

const cardSchema = new Schema(
    {
        titulo:{
            type: String,
            required: true
        },
        descripcion:{
            type: String,
            required: true
            },
            url:{
                type: String,
                }
    },
    { timestamps: true  }
);

module.exports = model('Card', cardSchema);