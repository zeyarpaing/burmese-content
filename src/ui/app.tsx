import { $action } from '@/controller';
import { Button } from '@/ui/components/Button';
import Navbar from '@/ui/components/Navbar';
import { useState } from 'preact/hooks';

export function App() {
  const [count, setCount] = useState(0);

  function create() {
    $action.createRectangles(count);
  }

  function cancel() {
    console.log('messenger');
  }

  function fill() {
    $action.fillDummyText();
  }

  return (
    <>
      <Navbar />
      <main class="w-full h-full p-6">
        <h1 class="dark:text-teal-500 text-blue-500 font-bold text-xl mb-2">Rectangle Creator</h1>
        <label class="text-sm">
          Ractangle count:{' '}
          <input
            class="rounded text-md w-full px-3 py-2 text-black"
            type="number"
            id="count"
            value={count}
            //  @ts-ignore
            onChange={(e) => setCount(+e.target?.value)}
          />
        </label>
        <div class="flex gap-2 items-center  justify-center my-2">
          <Button id="cancel" onClick={cancel}>
            Close
          </Button>
          <Button id="fill" onClick={fill}>
            Random
          </Button>
          <Button id="create" onClick={create}>
            Create
          </Button>
        </div>
      </main>
    </>
  );
}
