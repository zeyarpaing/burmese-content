import Content from '@/ui/components/Content';
import Navbar from '@/ui/components/Navbar';
import { contentTypes } from '@/data';
import { searchKeyword } from '@/ui/states';

export function App() {
  return (
    <>
      <Navbar />
      <main class="w-full my-2">
        <section class="flex flex-col space-y-2 mx-2">
          {contentTypes
            ?.filter(
              (contentType) =>
                !searchKeyword.value.trim() ||
                contentType.name.toLowerCase().includes(searchKeyword.value.trim().toLowerCase())
            )
            .map((contentType) => (
              <Content key={contentType.name} contentType={contentType} />
            ))}
        </section>
      </main>
    </>
  );
}
