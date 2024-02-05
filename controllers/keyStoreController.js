const KeyStoreModel = require('../models/keyStoreModel');

exports.createKeyStore = async (req, res) => {
    try {
        const {walletName, keystoreJSON, password } = req.body;

        // Create a new key store
        const newKeyStore = new KeyStoreModel({walletName, keystoreJSON, password });
        await newKeyStore.save();

        res.status(201).json({ message: 'Key store created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllKeyStores = async (req, res) => {
    try {
        const keyStores = await KeyStoreModel.find();

        res.status(200).json(keyStores);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getSingleKeyStore = async (req, res) => {
    try {
        const keyStoreId = req.params.id;
        const keyStore = await KeyStoreModel.findById(keyStoreId);

        if (!keyStore) {
            return res.status(404).json({ message: 'Key store not found' });
        }

        res.status(200).json(keyStore);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteSingleKeyStore = async (req, res) => {
    try {
        const keyStoreId = req.params.id;

        const deletedKeyStore = await KeyStoreModel.findByIdAndDelete(keyStoreId);

        if (!deletedKeyStore) {
            return res.status(404).json({ message: 'Key store not found' });
        }

        res.status(200).json({ message: 'Key store deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
