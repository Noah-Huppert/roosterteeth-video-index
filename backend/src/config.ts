/**
 * Backend configuration.
 */
export type Config = {
  /**
   * HTTP configuration.
   */
  http: HTTPConfig;
}

export type HTTPConfig = {
  /**
   * Port to serve HTTP API traffic.
   * Env var: RT_VIDEO_INDEX_HTTP_PORT
   */
  port: number;
};

/**
 * Ensure an environment variable has a value.
 * Prefixes the env var name with "RT_VIDEO_INDEX_".
 * @param key - Environment variable name
 * @param defaultValue - If environment variable does not exist return this value
 * @throws Error
 * If environment variable does not have value.
 */
function ensureEnv(key: string, defaultValue?: string): string {
  const fullKey = `RT_VIDEO_INDEX_${key}`;
  const value = process.env[fullKey] || defaultValue;
  
  if (!value) {
    throw new Error(`Environment variable ${fullKey} required for configuration`);
  }

  return value;
}

/**
 * Load values from environment variables.
 * The "Env var" documentation comment for each property's type indicates which environment variable will be read for the value.
 * @returns Configuration values
 */
export function ConfigFromEnv(): Config {
  return {
    http: {
      port: parseInt(ensureEnv("HTTP_PORT", "8000")),
    },
  };
}
