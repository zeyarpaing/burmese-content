import Content from '@/ui/components/Content';
import Navbar from '@/ui/components/Navbar';
import { contentTypes } from '@/data';

export function App() {
  return (
    <>
      <Navbar />
      <main class="w-full my-2">
        <section class="flex flex-col space-y-2 mx-2">
          {contentTypes.map((contentType) => (
            <Content key={contentType.name} contentType={contentType} />
          ))}
        </section>
      </main>
    </>
  );
}
