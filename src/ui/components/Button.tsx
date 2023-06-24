import { JSX } from 'preact';

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded"
      {...props}
    />
  );
}
