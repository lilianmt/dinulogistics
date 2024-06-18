import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitButton() {
  const formStatus = useFormStatus();
  const { pending } = formStatus;
  return (
    <button
      type="submit"
      className="group relative flex items-center justify-center m-2 py-4 w-[10rem] gap-3 bg-transparent outline-none rounded-2xl border border-white/50 font-medium text-lg text-white tracking-wider hover:text-prime-200  hover:rounded-3xl hover:shadow-lg hover:shadow-prime-600/[0.1]  active:rounded-full will-change-transform origin-center overflow-hidden transition-all ease-in-out"
      disabled={pending}
    >
      <span className="absolute inset-0 rounded-4xl group-hover:bg-[image:radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.3)_20%,rgba(56,189,248,0)_100%)] bg-transparent group-hover:opacity-100 transition-all ease-in-out " />

      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div>
      ) : (
        <>
          <span className="relative text-white group-hover:text-shadow-white will-change-transform text-nowrap">
            Submit{' '}
          </span>
          <FaPaperPlane className="group-hover:text-prime-300 group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
        </>
      )}
    </button>
  );
}
