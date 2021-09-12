import {  Logger } from "tslog";

import { ConfigFromEnv } from "./config";
import { API } from "./api";

function main() {
  const logger = new Logger();

  const cfg = ConfigFromEnv();
  
  const api = new API({
    logger,
    cfg,
  });
  
  api.serve().then(() => {
    logger.info("API done");
  }).catch((e) => {
    logger.error("API error", { error: e });
  });
}

main();
