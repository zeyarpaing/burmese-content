import { Tab, tabs } from '@/ui/utils/data';
import { signal } from '@preact/signals';

export const activeTab = signal<Tab>(tabs[0]);
