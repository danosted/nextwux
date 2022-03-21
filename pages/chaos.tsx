import type { NextPage } from 'next';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import ChaosGrid from '../components/ChaosGrid';

const Chaos: NextPage = () => {
  return (
    <div className="flex items-center justify-center bg-slate-900 w-full h-full">
      <ChaosGrid></ChaosGrid>
    </div>
  )
}

export default Chaos
