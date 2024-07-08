import { cn } from '@/lib/utils';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        ' grid grid-cols-1 md:grid-cols-3 md:grid-row-7 gap-8 max-w-7xl mx-auto my-16 px-16',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
}) => {
  return (
    <div
      className={cn(
        'group z-10 relative overflow-hidden group row-span-1 rounded-xl group/bento transition duration-500 shadow-none p-4 bg-prime-900 border-white/[0.1] border justify-start flex flex-col space-y-4 hover:bg-seco-800 contain-content',
        className
      )}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full relative grayscale group-hover:filter-none transition duration-500 ease-in-out ">
          {img && (
            <Image
              src={img}
              alt={img}
              height={1000}
              width={1000}
              className={cn(
                imgClassName,
                'object-cover object-center rounded-xl '
              )}
            />
          )}
        </div>
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-500">
        <div className="text-2xl font-light tracking-tight text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="text-base tracking-wide text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
