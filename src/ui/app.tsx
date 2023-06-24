import { $action } from '@/controller';
import { Button } from '@/ui/components/Button';
import Content from '@/ui/components/Content';
import Navbar from '@/ui/components/Navbar';
import { contentTypes } from '@/ui/utils';
import { activeTab } from '@/ui/utils/states';
import { useState } from 'preact/hooks';

export function App() {
  function fillText(content: string[]) {
    $action.fillText(content);
  }

  return (
    <>
      <Navbar />
      <main class="w-full h-full my-2">
        <section class="[&>button:not(&>button:last-child)]:border-b [&>button:not(&>button:last-child)]:border-b-neutral-400/40">
          {contentTypes
            .filter((ct) => ct.group?.includes(activeTab.value))
            .map((content) => (
              <Content
                name={content.name}
                description={content.description}
                onClick={() => fillText(content.contents)}
              />
            ))}
        </section>
      </main>
    </>
  );
}
