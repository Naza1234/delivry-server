const mongoose = require('mongoose');

const shipmentPackageSchema = new mongoose.Schema({
    shipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'
    },
    productName: String,
    productWeight: Number,
    productSize: String
});

const ShipmentPackage = mongoose.model('ShipmentPackage', shipmentPackageSchema);

module.exports = ShipmentPackage;
