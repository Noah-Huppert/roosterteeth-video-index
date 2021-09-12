import { Logger } from "tslog";
import express from "express";

export class API {
  logger: Logger;
  
  constructor({
    logger,
  }: {
    readonly logger: Logger
  }) {
    this.logger = logger;
  }
  
  async serve(): Promise<void> {
    this.logger.info("Starting API HTTP server");
  }
}
