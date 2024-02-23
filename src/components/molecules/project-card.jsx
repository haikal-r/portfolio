import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/atoms/dialog';
import Image from "next/image";
import Link from 'next/link';
import { buttonVariants } from '@/components/atoms/button'

export default function ProjectCard() {
  return (
    <Dialog>
      <DialogTrigger>
        <article className='rounded-md overflow-hidden group hover:shadow-2xl transition-shadow duration-500 border hover:shadow-secondary'>
          <figure className='relative aspect-video overflow-hidden'>
            <Image
              src='/dummy.png'
              alt='test'
              blurDataURL='/dummy.png'
              placeholder='blur'
              quality={10}
              fill
              sizes='100%'
              className='object-cover object-center group-hover:scale-105 transition-transform duration-500'
              priority
            />
            <div className='w-full h-full absolute z-30 flex items-center rounded-t justify-center bg-background/80 backdrop-blur-sm overflow-hidden group-hover:opacity-0 transition-opacity duration-500'>
              <p className='text-3xl italic font-semibold uppercase'>Projects</p>
            </div>
          </figure>

          <div className='p-3'>
            <p className='line-clamp-5 text-off-white text-left text-sm text-muted-foreground'>Projects</p>
          </div>
        </article>
      </DialogTrigger>
    </Dialog>
  );
}
