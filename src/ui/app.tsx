import { $action } from '@/controller';
import { Button } from '@/ui/components/Button';
import Navbar from '@/ui/components/Navbar';
import { contentTypes } from '@/ui/utils';
import { activeTab } from '@/ui/utils/states';
import { useState } from 'preact/hooks';

export function App() {
  const [count, setCount] = useState(0);

  function create() {
    $action.createRectangles(0);
  }

  function cancel() {
    console.log('messenger');
  }

  function fillText(content: string[]) {
    $action.fillText(content);
  }

  return (
    <>
      <Navbar />
      <main class="w-full h-full p-2">
        <section>
          {contentTypes
            .filter((ct) => ct.group?.includes(activeTab.value))
            .map((content) => (
              <button
                class="w-full p-2 text-left text-xs hover:bg-gray-200/50 rounded"
                onClick={() => fillText(content.contents)}
                key={content.name}
              >
                <p class="font-bold">{content.name}</p>
                <p>{content.description}</p>
              </button>
            ))}
        </section>
      </main>
    </>
  );
}
