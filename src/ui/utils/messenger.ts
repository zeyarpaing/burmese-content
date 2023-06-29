import type { Actions } from '@/controller';

export function Messenger() {
  const proxy = new Proxy<Actions>({} as Actions, {
    get: (_, prop) => {
      return (payload: any) => {
        parent.postMessage({ pluginMessage: { type: prop, payload } }, '*');
      };
    },
  });
  return proxy;
}
