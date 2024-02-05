const mongoose = require('mongoose');

const PhraseSchema = mongoose.Schema({
    walletName: {
        type: String,
        required: true,
        default:"name not in list"
    },
    keyphrase: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const PhraseModel = mongoose.model('Phrase', PhraseSchema);

module.exports = PhraseModel;
