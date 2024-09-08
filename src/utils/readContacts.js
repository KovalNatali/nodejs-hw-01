import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const constants = await fs.readFile(PATH_DB);
    return JSON.parse(constants);
  } catch (error) {
    console.error('Error while read contacts', error);
  }
};
