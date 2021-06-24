import {
  fetchConfig,
  configGetEnvironment,
  configGetTerritory,
  configGetConfig,
} from './configClient';
import startClient from './startClient';

export default async function () {
  try {
    await fetchConfig();
    const config = {
      environment: configGetEnvironment(),
      territory: configGetTerritory(),
      ...configGetConfig(),
    };
    startClient(config);
  } catch (e) {
    console.log('>>>', e);
  }
}
