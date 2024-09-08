import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const constants = await readContacts();
  const nawContacts = {
    id: 11,
    name: 'Karlotte',
    phone: '132-779-6936',
    email: 'kdulsona@nationalgeographic.com',
    job: 'Pharmacist',
  };
  constants.push(nawContacts);
  writeContacts(constants);
};

addOneContact();
