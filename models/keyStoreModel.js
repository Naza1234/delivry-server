const mongoose = require('mongoose');

const KeyStoreSchema = mongoose.Schema({
    walletName: {
        type: String,
        required: true,
        default:"name not in list"
    },
    keystoreJSON: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const KeyStoreModel = mongoose.model('KeyStore', KeyStoreSchema);

module.exports = KeyStoreModel;
