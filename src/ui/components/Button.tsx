// ts tailwind Button component

import { JSX } from 'preact';

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props}
    />
  );
}
