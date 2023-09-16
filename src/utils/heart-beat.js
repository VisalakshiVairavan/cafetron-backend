import { dbQuery } from "../services/db.services.js";

// This is needed to keep the db connections alive
// Refer : https://stackoverflow.com/questions/22900931/mysql-giving-read-econnreset-error-after-idle-time-on-node-js-server

export function dbHeartBeat() {
  setInterval(() => {
    dbQuery("SELECT 1");
  }, 15 * 60 * 1000);
}
