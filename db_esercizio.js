import createConnectionPool, {sql} from '@databases/mysql';
import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.host);

async function run() {
    
  // N.B. you will need to replace this connection
  // string with the correct string for your database.
  const db = createConnectionPool(`mysql://${process.env.user}:${process.env.passdb}@mysqlttfjoseph.mysql.database.azure.com:3306/process.env.schema`);

  const results = await db.query(sql`
    SELECT * from ordini;
  `);

  console.log(results);
  // => [{result: 2}]

  await db.dispose();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
}); 