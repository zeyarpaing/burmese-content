import enNames from '@/name-en.json';
import mmNames from '@/name-mm.json';
export function $action(type: string, payload?: any) {
  parent.postMessage({ pluginMessage: { type, payload } }, '*');
}
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
    name: 'Name (EN)',
    description: 'A list of names in English',
    contents: enNames,
    group: ['Home', 'Text'],
  },
  {
    name: 'အမည် (မြန်မာ)',
    description: 'မြန်မာစာလုံးအမည်များ၏စာရင်း',
    contents: mmNames,
    group: ['Home', 'Text'],
  },
];
