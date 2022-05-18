const { Schema, model } = require('mongoose');

const PizzaScheme = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    topping: []
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;