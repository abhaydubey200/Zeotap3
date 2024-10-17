const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
    type: { type: String, required: true },
    left: { type: mongoose.Schema.Types.ObjectId, ref: 'Node' },
    right: { type: mongoose.Schema.Types.ObjectId, ref: 'Node' },
    value: { type: mongoose.Schema.Types.Mixed },
});

const RuleSchema = new mongoose.Schema({
    rule: { type: String, required: true },
    ast: { type: [NodeSchema], required: true },
});

const Rule = mongoose.model('Rule', RuleSchema);
module.exports = Rule;
