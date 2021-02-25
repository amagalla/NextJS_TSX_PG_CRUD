const { Pool } = require("pg");

const myURI =
  "postgres://okhmmvet:aLL9v67r3j2ADvP1Z601jPtLtsLQjkZS@ziggy.db.elephantsql.com:5432/okhmmvet";

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
show VARCHAR(15) NOT NULL
);

*/
