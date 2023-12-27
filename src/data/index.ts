import maleNamesEn from '@/data/name-m-en.json';
import femaleNamesEn from '@/data/name-f-en.json';
import maleNamesMm from '@/data/name-m-mm.json';
import femaleNamesMm from '@/data/name-f-mm.json';

import pronounsMm from '@/data/pronoun-mm.json';
import pronounsEn from '@/data/pronoun-en.json';

import addressEn from '@/data/address-en.json';
import addressMm from '@/data/address-mm.json';
import mobileEn from '@/data/mobile-en.json';
import mobileMm from '@/data/mobile-mm.json';

import randomMm from '@/data/random-mm.json';
import randomEn from '@/data/random-en.json';

import dateShortEn from '@/data/date-short-en.json';
import dateShortMm from '@/data/date-short-mm.json';
import dateCompactEn from '@/data/date-compact-en.json';
import dateCompactMm from '@/data/date-compact-mm.json';

export type ContentType = {
  name: string;
  keyword: string;
  subActions?: string[];
  defaultAction?: string;
  contents: Record<string, string[]>;
};

export const contentTypes: ContentType[] = [
  {
    name: 'Name',
    keyword: 'name, အမည်, နာမည်',
    subActions: ['Male', 'Female'],
    contents: {
      Male: maleNamesEn,
      Female: femaleNamesEn,
    },
  },
  {
    name: 'အမည်',
    keyword: 'name, အမည်, နာမည်',
    subActions: ['Male', 'Female'],
    contents: {
      Male: maleNamesMm,
      Female: femaleNamesMm,
    },
  },
  {
    name: 'Address',
    keyword: 'address, လိပ်စာ, နေရပ်',
    contents: { all: addressEn },
  },
  {
    name: 'လိပ်စာ',
    keyword: 'address, လိပ်စာ, နေရပ်',
    contents: { all: addressMm },
  },
  {
    name: 'Mobile',
    keyword: 'mobile, ဖုန်းနံပါတ်, phone',
    contents: { all: mobileEn },
  },
  {
    name: 'ဖုန်းနံပါတ်',
    keyword: 'mobile, ဖုန်းနံပါတ်, phone',
    contents: { all: mobileMm },
  },
  {
    name: 'Date',
    keyword: 'date, နေ့စွဲ, ရက်စွဲ',
    subActions: ['DD.MM.YYY', 'DD MMM YYYY'],
    defaultAction: 'DD.MM.YYY',
    contents: {
      'DD.MM.YYY': dateShortEn,
      'DD MMM YYYY': dateCompactEn,
    },
  },
  {
    name: 'နေ့စွဲ',
    keyword: 'date, နေ့စွဲ, ရက်စွဲ',
    subActions: ['DD.MM.YYYY', 'DD MMM YYYY'],
    defaultAction: 'DD.MM.YYY',
    contents: {
      'DD.MM.YYY': dateShortMm,
      'DD MMM YYYY': dateCompactMm,
    },
  },
  {
    name: 'ကျပန်းစာပိုဒ်',
    keyword: 'random, lorem ipsum, ကျပန်း',
    contents: {
      all: randomMm,
    },
  },
  {
    name: 'Random Paragraph',
    keyword: 'random, lorem ipsum, ကျပန်း',
    contents: {
      all: randomEn,
    },
  },
  {
    name: 'Pronouns',
    keyword: 'pronouns, နာမ်စား',
    contents: { all: pronounsEn },
  },
  {
    name: 'နာမ်စား',
    keyword: 'pronouns, နာမ်စား',
    contents: { all: pronounsMm },
  },
];
