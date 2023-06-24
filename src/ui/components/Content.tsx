import { JSX } from 'preact';

type Props = JSX.HTMLAttributes<HTMLButtonElement> & {
  name: string;
  description?: string;
};

export default function Content({ name, description, ...props }: Props) {
  return (
    <button
      class="w-full py-2.5 px-2 text-left text-xs hover:bg-amber-200/30 rounded-none"
      {...props}
    >
      <p class="font-bold">{name}</p>
      <p>{description}</p>
    </button>
  );
}
