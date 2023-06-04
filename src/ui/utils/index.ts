export function action(type: string, payload?: any) {
  parent.postMessage({ pluginMessage: { type, payload } }, '*');
}
