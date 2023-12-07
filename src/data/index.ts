import maleNamesEn from '@/data/name-m-en.json';
import femaleNamesEn from '@/data/name-f-en.json';
import maleNamesMm from '@/data/name-m-mm.json';
import femaleNamesMm from '@/data/name-f-mm.json';

import mmPronouns from '@/data/pronoun-mm.json';
import enPronouns from '@/data/pronoun-en.json';

import enAddress from '@/data/address-en.json';
import mmAddress from '@/data/address-mm.json';
import enMobile from '@/data/mobile-en.json';
import mmMobile from '@/data/mobile-mm.json';

import mmRandom from '@/data/random-mm.json';
import enRandom from '@/data/random-en.json';

import enDateShort from '@/data/date-short-en.json';
import mmDateShort from '@/data/date-short-mm.json';
import enDateCompact from '@/data/date-compact-en.json';
import mmDateCompact from '@/data/date-compact-mm.json';

// export const tabs = ['Home', 'Text', 'Illustrations', 'Add'] as const;
// export type Tab = (typeof tabs)[number];

export type ContentType = {
  name: string;
  description?: string;
  subActions?: string[];
  defaultAction?: string;
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
    name: 'Address',
    description: 'Address in English',
    contents: { all: enAddress },
  },
  {
    name: 'လိပ်စာ',
    description: 'Address in Burmese',
    contents: { all: mmAddress },
  },
  {
    name: 'Mobile',
    description: 'Mobile numbers in English',
    contents: { all: enMobile },
  },
  {
    name: 'ဖုန်းနံပါတ်',
    description: 'Mobile numbers in Burmese',
    contents: { all: mmMobile },
  },
  {
    name: 'Date',
    description: '',
    subActions: ['Short', 'Compact'],
    defaultAction: 'Short',
    contents: {
      Short: enDateShort,
      Compact: enDateCompact,
    },
  },
  {
    name: 'နေ့စွဲ',
    description: '',
    subActions: ['Short', 'Compact'],
    defaultAction: 'Short',
    contents: {
      Short: mmDateShort,
      Compact: mmDateCompact,
    },
  },
  {
    name: 'ကျပန်းစာပိုဒ်',
    description: 'ကျပန်းမြန်မာစာ',
    contents: {
      all: mmRandom,
    },
  },
  {
    name: 'Random Paragraph',
    description: 'ကျပန်းမြန်မာစာ',
    contents: {
      all: enRandom,
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
];
