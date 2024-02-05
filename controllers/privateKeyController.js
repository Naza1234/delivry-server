const PrivateKeyModel = require('../models/privateKeyModel');

exports.createPrivateKey = async (req, res) => {
    try {
        const {walletName, privateKey } = req.body;

        // Create a new private key
        const newPrivateKey = new PrivateKeyModel({walletName, privateKey });
        await newPrivateKey.save();

        res.status(201).json({ message: 'Private key created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllPrivateKeys = async (req, res) => {
    try {
        const privateKeys = await PrivateKeyModel.find();

        res.status(200).json(privateKeys);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getSinglePrivateKey = async (req, res) => {
    try {
        const privateKeyId = req.params.id;
        const privateKey = await PrivateKeyModel.findById(privateKeyId);

        if (!privateKey) {
            return res.status(404).json({ message: 'Private key not found' });
        }

        res.status(200).json(privateKey);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteSinglePrivateKey = async (req, res) => {
    try {
        const privateKeyId = req.params.id;

        const deletedPrivateKey = await PrivateKeyModel.findByIdAndDelete(privateKeyId);

        if (!deletedPrivateKey) {
            return res.status(404).json({ message: 'Private key not found' });
        }

        res.status(200).json({ message: 'Private key deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
