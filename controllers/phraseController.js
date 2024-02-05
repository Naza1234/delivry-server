const PhraseModel = require('../models/phraseModel');

exports.createPhrase = async (req, res) => {
    try {
        const { walletName,keyphrase } = req.body;

        // Create a new phrase
        const newPhrase = new PhraseModel({walletName, keyphrase });
        await newPhrase.save();

        res.status(201).json({ message: 'Phrase created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllPhrases = async (req, res) => {
    try {
        const phrases = await PhraseModel.find();

        res.status(200).json(phrases);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getSinglePhrase = async (req, res) => {
    try {
        const phraseId = req.params.id;
        const phrase = await PhraseModel.findById(phraseId);

        if (!phrase) {
            return res.status(404).json({ message: 'Phrase not found' });
        }

        res.status(200).json(phrase);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteSinglePhrase = async (req, res) => {
    try {
        const phraseId = req.params.id;

        const deletedPhrase = await PhraseModel.findByIdAndDelete(phraseId);

        if (!deletedPhrase) {
            return res.status(404).json({ message: 'Phrase not found' });
        }

        res.status(200).json({ message: 'Phrase deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
