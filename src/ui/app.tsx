import { useState } from 'preact/hooks';
import './app.css';

export function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  function create() {
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
  }

  function cancel() {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  }

  function fill() {
    parent.postMessage({ pluginMessage: { type: 'fill-dummy-text' } }, '*');
  }
  // });
  return (
    <>
      <h2>Rectangle Creator</h2>
      <p>
        {/* @ts-ignore */}
        Count: <input id="count" value={count} onChange={(e) => setCount(+e.target?.value)} />
      </p>
      <button id="create" onClick={create}>
        Create
      </button>
      <button id="cancel" onClick={cancel}>
        Cancel
      </button>
      <button id="fill" onClick={fill}>
        Fill
      </button>
    </>
  );
}
