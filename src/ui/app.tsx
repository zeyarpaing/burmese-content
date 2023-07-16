import Content from '@/ui/components/Content';
import Navbar from '@/ui/components/Navbar';
import { contentTypes } from '@/ui/utils/data';
import { Messenger } from '@/ui/utils/messenger';

export function App() {
  return (
    <>
      <Navbar />
      <main class="w-full my-2">
        <section class="[&>button:not(&>button:last-child)]:border-b [&>button:not(&>button:last-child)]:border-b-neutral-400/40">
          {contentTypes.map((contentType) => (
            <Content key={contentType.name} contentType={contentType} />
          ))}
        </section>
      </main>
    </>
  );
}
