import { initializeState } from '../../../../business-logic/initialize-state.js';
import { readMessage } from '../../../../business-logic/read-message.js';

import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';

import { textInput } from '../components/text-input.js';

export const initMessage = async () => {
  await initializeState('../../../../data/friendly.json', import.meta);

  document.getElementById('navbar-container').appendChild(navbar());
  document.getElementById('footer-container').appendChild(footer());

  const value = readMessage();
  const inputEl = textInput('message', value);
  document.getElementById('update-input').appendChild(inputEl);
};
