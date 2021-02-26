const { Pool } = require("pg");

const myURI = process.env.pg;

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: myURI,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};

/*

Schema

CREATE TABLE Shows (
id SERIAL PRIMARY KEY,
show VARCHAR(50) NOT NULL
);

*/
