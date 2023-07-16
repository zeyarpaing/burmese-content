import { ContentType } from '@/ui/utils/data';
import { Messenger } from '@/ui/utils/messenger';
import { JSX } from 'preact';

type Props = JSX.HTMLAttributes<HTMLButtonElement> & {
  contentType: ContentType;
};

export default function Content({ contentType: content, ...props }: Props) {
  return (
    <div class="flex">
      <button
        class="w-full py-2.5 px-2 text-left text-xs hover:bg-amber-200/30 rounded-none"
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
