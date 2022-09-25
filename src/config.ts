interface ENV {
  AUTH_URL: string | undefined;
  PORT: string | undefined;
}

interface Config {
  AUTH_URL: string;
  PORT: string;
}

const getConfig = (): ENV => {
  return {
    AUTH_URL: process.env.AUTH_URL ?? 'http://127.0.0.1:8080',
    PORT: process.env.PORT ?? '8081',
  };
};

const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();
const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;