import { useState } from 'preact/hooks';
import './app.css';
import { action } from './utils';

export function App() {
  const [count, setCount] = useState(0);

  function create() {
    action('create-rectangles', count);
  }

  function cancel() {
    action('cancel');
  }

  function fill() {
    action('fill-dummy-text');
  }

  return (
    <>
      <h2 class="dark:text-teal-400 text-blue-500 font-bold">Rectangle Creator</h2>
      <p>
        {/* @ts-ignore */}
        Count: <input id="count" value={count} onChange={(e) => setCount(+e.target?.value)} />
      </p>
      <div class="btn-group">
        <button id="create" onClick={create}>
          Create
        </button>
        <button id="cancel" onClick={cancel}>
          Cancel
        </button>
        <button id="fill" onClick={fill}>
          Fill dummy text
        </button>
      </div>
    </>
  );
}
