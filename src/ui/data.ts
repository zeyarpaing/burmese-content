import maleNamesEn from '@/data/name-m-en.json';
import femaleNamesEn from '@/data/name-f-en.json';
import maleNamesMm from '@/data/name-m-mm.json';
import femaleNamesMm from '@/data/name-f-mm.json';

import mmPronouns from '@/data/pronoun-mm.json';
import enPronouns from '@/data/pronoun-en.json';

// export const tabs = ['Home', 'Text', 'Illustrations', 'Add'] as const;
// export type Tab = (typeof tabs)[number];

export type ContentType = {
  name: string;
  description?: string;
  subActions?: string[];
  contents: Record<string, string[]>;
};

export const contentTypes: ContentType[] = [
  {
    name: 'Name',
    description: 'Burmese names in English',
    subActions: ['Male', 'Female'],
    contents: {
      Male: maleNamesEn,
      Female: femaleNamesEn,
    },
  },
  {
    name: 'အမည်',
    description: 'Burmese names in Burmese',
    subActions: ['Male', 'Female'],
    contents: {
      Male: maleNamesMm,
      Female: femaleNamesMm,
    },
  },
  {
    name: 'Pronouns',
    description: 'Pronouns in English',
    contents: { all: enPronouns },
    // group: ['Home', 'Text'],
  },
  {
    name: 'နာမ်စား',
    description: 'Pronouns in Burmese',
    contents: { all: mmPronouns },
    // group: ['Home', 'Text'],
  },
  {
    name: 'Lorem ipsum (မြန်မာ)',
    description: 'ကျပန်းမြန်မာစာ',
    contents: { all: [] },
    // group: ['Home', 'Text'],
  },
];
