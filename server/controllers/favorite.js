const connectToDb = require('./connectToDb.js');


const favorite = (req, res, next) => {

  const pool = connectToDb();
  const query = {
    name: 'GetFavorite',
    text:'SELECT id, label, img_url, recipe_url FROM "favorites_table" WHERE user_id=$1',
    values: [req.params.user_id]
  };

  pool.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.locals.err = err;
      return next();
    }
    res.locals.data = results.rows;
    return next();
  })
};


module.exports = favorite;
