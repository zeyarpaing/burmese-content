export function $action(type: string, payload?: any) {
  parent.postMessage({ pluginMessage: { type, payload } }, '*');
}
export const tabs = ['Home', 'Text', 'Illustrations', 'Add'] as const;
export type Tab = (typeof tabs)[number];
