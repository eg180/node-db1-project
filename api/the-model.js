const db = require('../data/dbConfig');

module.exports = {
    getAll() {
        return db('posts');
    }, 

    getById(id) {
        // SELECT * FROM table
        // WHERE id = '1';
        return db('posts').where('id', id).first()
    },

    create(post) {
        return db('posts').insert(post)
        .then(([id]) => {
            return db('posts').where('id', id).first()
        })
    },

    update(id, post) {

    // UPDATE posts SET title = 'foo', contents = 'bar'
    // WHERE id = 1;
        return db('posts').where('id', id).update(post)
  },

  delete(id) {

    // DELETE FROM posts WHERE id = 1;
    return db('posts').where('id', id).del()
  }

}