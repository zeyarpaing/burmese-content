import type { Actions } from '@/controller';

export const Figma = new Proxy<Actions>({} as Actions, {
  get: (_, prop) => {
    return (payload: any) => {
      parent.postMessage({ pluginMessage: { type: prop, payload } }, '*');
    };
  },
});
