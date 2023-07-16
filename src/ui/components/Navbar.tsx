import { tabs } from '@/ui/utils/data';
import { activeTab } from '@/ui/utils/states';

type Props = {};
export default function Navbar({}: Props) {
  return (
    <nav class="sticky top-0 w-full dark:bg-neutral-800 bg-white">
      {/* <ul class="flex justify-between px-2 py-1">
        {tabs.map((tab) => (
          <li>
            <button
              class={`px-4 border rounded-md py-1.5 ${
                activeTab.value === tab
                  ? 'text-neutral-900 bg-amber-300 border-amber-400'
                  : ' border-transparent hover:bg-amber-200/30'
              }`}
              onClick={() => (activeTab.value = tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul> */}
      <section class="mx-2 mt-2 relative">
        <svg
          class="absolute top-1/2 -translate-y-1/2 left-0 mx-2 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          class="border border-neutral-400/50 rounded-md pl-10 py-2 bg-transparent w-full"
          placeholder="Search"
        />
      </section>
    </nav>
  );
}
