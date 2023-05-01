import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Header from '../components/Header'
import etherscan_logo from '../images/etherscan_logo.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <div className="background-moon">
      <div className=" bg-blue-100 flex flex-col items-center justify-between gap-20 w-full">
      </div>
      <span className="bg-slate-100 bg-opacity-50 flex flex-col text-center shadow-md rounded-xl font-bold text-slate-200 px-2 py-2">
        Missed on $PEPE ? Take part in the memest of coins, and follow us for a ride to the $MOON ! 
      </span>
      <Image src={etherscan_logo} alt='etherscan' onClick={() => window.location.replace('https://etherscan.io/token/0x6982508145454ce325ddbe47a25d4ec3d2311933')} style={{ width: 100, height: 100 }}/>
    </div>
    </>
  )
}
