import {  Logger } from "tslog";

import { API } from "./api";

function main() {
  const logger = new Logger();
  
  const api = new API({ logger });
  api.serve().then(() => {
    logger.info("API done");
  }).catch((e) => {
    logger.error("API error", { error: e });
  });
}
