import { ContentType } from '@/ui/data';
import { Messenger } from '@/ui/utils/messenger';
import { JSX } from 'preact';

type Props = JSX.HTMLAttributes<HTMLButtonElement> & {
  contentType: ContentType;
};

export default function Content({ contentType: content, ...props }: Props) {
  return (
    <div
      // style={{
      //   background: `linear-gradient(130deg, #F4EAD0 0%, #F4EAD0 50.57%, #F5EACC 100%)`,
      // }}

      class="flex border border-amber-500 text-xs text-neutral-900 mx-2 my-1 rounded-md bg-gradient-to-r from-amber-300 dark:from-amber-100  via-amber-200 dark:via-yellow-50 to-amber-200 dark:to-yellow-50 "
    >
      <button
        // linear-gradient(130deg, #D9F0F0 0%, #D0E9E9 50.57%, #C2E4E4 100%)
        class="text-left w-full hover:bg-cyan-500/20  py-2.5 px-2"
        // class="bg-cyan-400 text-black rounded-lg w-full border-2"
        onClick={() => Messenger.fillText(Object.values(content.contents).flat())}
        {...props}
      >
        <p class="font-bold">{content.name}</p>
        <p>{content.description}</p>
      </button>
      <button>
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
      </button>
    </div>
  );
}
