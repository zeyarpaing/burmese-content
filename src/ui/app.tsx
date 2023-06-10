import { useState } from 'preact/hooks';
import { action } from './utils';
import { Button } from './components/Button';

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
      <main class="w-full h-full">
        <h2 class="dark:text-teal-500 text-blue-500 font-bold">Rectangle Creator</h2>
        <label>
          Ractangle count:{' '}
          <input
            class="rounded"
            id="count"
            value={count}
            //  @ts-ignore
            onChange={(e) => setCount(+e.target?.value)}
          />
        </label>
        <div class="flex gap-2 items-center flex-wrap justify-center">
          <Button id="create" onClick={create}>
            Create
          </Button>
          <Button id="cancel" onClick={cancel}>
            Cancel
          </Button>
          <Button
            id="fill"
            onClick={() => {
              window.location.reload();
            }}
          >
            Fill dummy text
          </Button>
        </div>
      </main>
    </>
  );
}
