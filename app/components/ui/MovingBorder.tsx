'use client';
import React from 'react';
import {
  delay,
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/utils/cn';

export function Button({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.3,
      delay: 0.3, 
      ease: 'easeInOut',
      type: 'spring',
      stiffness:100,
      damping: 10
      }}
    >
    <Component
        className={cn(
            'bg-brand-900  relative text-xl h-14 w-40 overflow-hidden ',
            containerClassName
        )}
        style={{
            borderRadius: borderRadius,
        }}
        {...otherProps}
        >
        <motion.div
            className='absolute inset-0'
            style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
            <MovingBorder duration={duration} rx='30%' ry='30%'>
            <motion.div
                className={cn(
                'h-[35px] w-[70px] opacity-[1] bg-[radial-gradient(var(--brand-100)_0%,transparent_100%)]',
                borderClassName
                )}
            />
            </MovingBorder>
        </motion.div>

        <motion.div

            className={cn(
            'relative bg-brand-500 bg-opacity-5 border border-brand-400 border-opacity-0 backdrop-blur-2xl backdrop-brightness-20 text-brand-300 flex items-center justify-center w-full h-full text-lg antialiased hover:bg-100 hover:bg-opacity-20 hover:text-brand-100 hover:border-opacity-15 transition hover:ease-in-out',
            className
            )}
            style={{
            borderRadius: '1rem',
            }}
        >
            {children}
        </motion.div>
        </Component>   
    </motion.div>
  );
}

export const MovingBorder = ({
  children,
  duration = 7500,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-100%) translateY(-80%)`;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        className='absolute h-full w-full'
        width='100%'
        height='100%'
        {...otherProps}
      >
        <rect
          fill='none'
          width='100%'
          height='100%'
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }
        }
      >
        {children}
      </motion.div>
    </>
  );
};
