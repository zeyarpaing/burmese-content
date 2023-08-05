import Content from '@/ui/components/Content';
import Navbar from '@/ui/components/Navbar';
import { contentTypes } from '@/ui/data';

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
