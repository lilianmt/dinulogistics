import React from 'react';

export default function DottedBackground() {
  return (
    <>
      <div
        className="absolute w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 500% 75% at 50% 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 120%)',
        }}
      ></div>
      <div
        className="absolute w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 500% 10% at 50% 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 350%)',
        }}
      >
        <div className="h-full w-full bg-dot-white/[0.6] absolute flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle_at_50%_250%,transparent_50%,white)]"></div>
        </div>
      </div>

      <div
        className="absolute w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 325% 5% at 50% 100%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 350%)',
        }}
      ></div>
    </>
  );
}
