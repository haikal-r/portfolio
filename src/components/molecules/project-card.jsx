import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/atoms/dialog'
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/atoms/button";

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
            <p className='line-clamp-5 text-off-white text-left text-sm text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae aliquam, modi odio dolorem quidem. Quos accusantium voluptatum earum dolores! Pariatur soluta deserunt quasi nisi eaque architecto est laboriosam deleniti!</p>
          </div>
        </article>
      </DialogTrigger>
      <DialogContent className='shadow-2xl shadow-secondary max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='mb-2'>test</DialogTitle>
          <DialogDescription>
            <figure className='relative aspect-video overflow-hidden rounded-md mb-5'>
              <Image src='/dummy.png' alt='dummy' fill className='object-cover object-top group-hover:scale-105 transition-transform duration-500' />
            </figure>
            <ul className='flex items-center gap-x-2 border-y py-2'>
              <li className='text-foreground'>Technologies :</li>
            </ul>
              
            <p className='whitespace-pre-line mt-2'>test</p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Link href='/dummy' className={buttonVariants({ variant: 'default' })}>
            Details
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
