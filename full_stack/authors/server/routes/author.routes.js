const AuthorController = require('../controllers/author.controller');
 
module.exports = app => {
    app.get('/api/authors', AuthorController.findAllRecords);
    app.get('/api/authors/:id', AuthorController.findOneRecord);
    app.put('/api/authors/:id', AuthorController.updateExistingRecord);
    app.post('/api/authors', AuthorController.createNewRecord);
    app.delete('/api/authors/:id', AuthorController.deleteExistingRecord);
}
