const Author = require('../models/author.model');

module.exports.findAllRecords = (req, res) => {
    Author.find()
        .then(allRecords => res.json({ records: allRecords }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneRecord = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneRecord => res.json({ record: oneRecord }))
        .catch(error => res.status(400).send(error));
}
 
module.exports.createNewRecord = (req, res) => {
    Author.create(req.body)
        .then(newRecord => res.json({ record: newRecord }))
        .catch(error => res.status(400).send(error));
}

module.exports.updateExistingRecord = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedRecord => res.json({ record: updatedRecord }))
        .catch(error => res.status(400).send(error));
}
 
module.exports.deleteExistingRecord = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
