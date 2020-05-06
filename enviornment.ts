import Constants from "expo-constants";

const ENV = {
  dev: {
    apiURL: "http://192.168.219.135:5000",
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  }
};

export default getEnvVars;
