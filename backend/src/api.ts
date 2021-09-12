import { Logger } from "tslog";
import express from "express";

import { Config } from "./config";

/**
 * API server.
 */
export class API {
  /**
   * Output messages.
   */
  logger: Logger;

  /**
   * Backend configuration.
   */
  cfg: Config;

  /**
   * HTTP express app.
   */
  app: express.Application;

  /**
   * Create API object.
   * @param logger - Logger to be used by the API
   */
  constructor({
    logger,
    cfg,
  }: {
    readonly logger: Logger
    readonly cfg: Config
  }) {
    this.logger = logger;
    this.cfg = cfg;
    this.app = express();
  }
  
  async serve(): Promise<void> {
    this.logger.info("Starting API HTTP server");

    return new Promise((resolve, reject) => {
      this.app.listen(this.cfg.http.port, () => {
        this.logger.info(`HTTP API server listening on :${this.cfg.http.port}`);
      });
    });
  }
}
