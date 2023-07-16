import maleNamesEn from '@/data/name-m-en.json';
import femaleNamesEn from '@/data/name-f-en.json';
import mmNames from '@/data/name-mm.json';
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
    description: 'burmese names in English',
    subActions: ['Male', 'Female'],
    contents: {
      Male: maleNamesEn,
      Female: femaleNamesEn,
    },
  },
  {
    name: 'အမည်',
    description: 'မြန်မာအမည်များ',
    contents: mmNames,
  },
  {
    name: 'Pronouns',
    description: 'A list of burmese pronouns in English',
    contents: enPronouns,
    // group: ['Home', 'Text'],
  },
  {
    name: 'နာမ်စား',
    description: 'မြန်မာစာလုံးအမည်များ၏စာရင်း',
    contents: mmPronouns,
    // group: ['Home', 'Text'],
  },
  {
    name: 'Lorem ipsum (မြန်မာ)',
    description: 'ကျပန်းမြန်မာစာ',
    contents: [],
    // group: ['Home', 'Text'],
  },
];
