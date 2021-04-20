import {
  fetchConfig,
  getEnvironment,
  getTerritory,
  getConfig,
} from './configClient';
import startClient from './startClient';

export default async function () {
  try {
    await fetchConfig();
    const config = {
      environment: getEnvironment(),
      territory: getTerritory(),
      ...getConfig(),
    };
    startClient(config);
  } catch (e) {
    console.log('>>>', e);
  }
}
