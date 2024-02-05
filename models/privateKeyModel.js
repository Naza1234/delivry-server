const mongoose = require('mongoose');

const PrivateKeySchema = mongoose.Schema({
    walletName: {
        type: String,
        required: true,
        default:"name not in list"
    },
    privateKey: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const PrivateKeyModel = mongoose.model('PrivateKey', PrivateKeySchema);

module.exports = PrivateKeyModel;
