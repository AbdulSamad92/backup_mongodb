const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        title: {type: mongoose.SchemaTypes.String, required: true},
        description: {type: mongoose.SchemaTypes.String, unique: true, required: true},
        userId: {type: mongoose.SchemaTypes.ObjectId, required: true}
    }
);

const blog = mongoose.model("Blog", blogSchema)

module.exports = blog