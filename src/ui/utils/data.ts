import enNames from '@/data/name-en.json';
import mmNames from '@/data/name-mm.json';
import mmPronouns from '@/data/pronoun-mm.json';
import enPronouns from '@/data/pronoun-en.json';

export const tabs = ['Home', 'Text', 'Illustrations', 'Add'] as const;
export type Tab = (typeof tabs)[number];

export type ContentType = {
  name: string;
  description?: string;
  contents: string[];
  group?: Tab[];
};

export const contentTypes: ContentType[] = [
  {
    name: 'Name',
    description: 'burmese names in English',
    contents: enNames,
    group: ['Home', 'Text'],
  },
  {
    name: 'အမည်',
    description: 'မြန်မာအမည်များ',
    contents: mmNames,
    group: ['Home', 'Text'],
  },
  {
    name: 'Pronouns',
    description: 'A list of burmese pronouns in English',
    contents: enPronouns,
    group: ['Home', 'Text'],
  },
  {
    name: 'နာမ်စား',
    description: 'မြန်မာစာလုံးအမည်များ၏စာရင်း',
    contents: mmPronouns,
    group: ['Home', 'Text'],
  },
  {
    name: 'Lorem ipsum (မြန်မာ)',
    description: 'ကျပန်းမြန်မာစာ',
    contents: [],
    group: ['Home', 'Text'],
  },
];
