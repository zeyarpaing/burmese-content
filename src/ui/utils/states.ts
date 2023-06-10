import { Tab, tabs } from '@/ui/utils';
import { signal } from '@preact/signals';

export const activeTab = signal<Tab>(tabs[0]);
