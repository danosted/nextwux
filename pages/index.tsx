import type { NextPage } from 'next';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex flex-wrap items-center justify-center h-full w-full bg-slate-700">
      <div className="basis-auto">

        <h1 className="text-8xl text-emerald-300 ">
          Hej Thorbjørn
        </h1>
        <Link href={'/chaos'} passHref>
          <a>CHAOS</a>
        </Link>

      </div>
      <div className='basis-auto text-8xl animate-bounce'>😁</div>
      <div className="absolute bottom-0">
        <ArrowCircleDownIcon className='h-8 w-8 animate-bounce' />
      </div>
    </div>
  )
}

export default Home
