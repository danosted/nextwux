import type { NextPage } from 'next'
import { ArrowCircleDownIcon } from '@heroicons/react/outline'
const Home: NextPage = () => {
  return (
    <div className="flex flex-wrap items-center justify-center h-full w-full bg-slate-700">
      <div className="basis-auto">

        <h1 className="text-8xl text-emerald-300 ">
          Hej Thorbjørn
        </h1>
        <code>
          Here is some code:

        </code>

      </div>
      <div className='basis-auto text-8xl animate-bounce'>😁</div>
      <div className="absolute bottom-0">
        <ArrowCircleDownIcon className='h-8 w-8 animate-bounce' />
      </div>
    </div>
  )
}

export default Home
