import { ContentType } from '@/ui/data';
import { Messenger } from '@/ui/utils/messenger';
import { useSignal } from '@preact/signals';
import { JSX } from 'preact';
import { useRef } from 'preact/hooks';

type Props = JSX.HTMLAttributes<HTMLButtonElement> & {
  contentType: ContentType;
};

export default function Content({ contentType: content, ...props }: Props) {
  const showMoreOptions = useSignal(false);

  return (
    <div class="flex border border-neutral-600/80 bg-neutral-800 mx-2 my-1 rounded-md shadow-md">
      <button
        class="text-left w-full hover:bg-neutral-600/50  py-2.5 px-2"
        onClick={() => Messenger.fillText(Object.values(content.contents).flat())}
        {...props}
      >
        <p class="font-bold">{content.name}</p>
        <small>{Object.values(content.contents).flat().slice(0, 4).join(', ')}, ...</small>
      </button>
      {Object.keys(content.contents).length > 1 && (
        <button
          onClick={() => {
            showMoreOptions.value = !showMoreOptions.value;
          }}
          class="relative px-3 block border-l border-l-neutral-600 hover:bg-neutral-600/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <>
            {showMoreOptions.value && (
              <div class="fixed z-[5] bg-neutral-900/20 w-full h-screen inset-0"></div>
            )}
            <div
              class={`absolute z-10 right-0 top-0 mt-12 transition-all bg-neutral-700 rounded-md shadow-md overflow-hidden ${
                showMoreOptions.value
                  ? 'visible opacity-100 translate-y-1'
                  : 'invisible opacity-0 translate-y-0'
              }`}
            >
              {Object.entries(content.contents).map(([label, values]) => (
                <button
                  class="w-full text-left hover:bg-neutral-600 px-4 py-2"
                  onClick={() => Messenger.fillText(values)}
                >
                  {label}
                </button>
              ))}
            </div>
          </>
          {/* )} */}
        </button>
      )}
    </div>
  );
}
