import { useRouter } from 'next/navigation'
import React from 'react'

function Header({currentUserData}: {currentUserData: any}) {    
    const rounter = useRouter();
    const codeSymbol = '</>'
  return (
    <div className='bg-primary p-5 flex justify-between items-center'>
        <div className='flex gap-1 text-xl font-bold cursor-pointer'
        onClick={() => rounter.push('/')}
        >
        <h1 className="text-blue-500">
            Green Yoga
        </h1>
        <h1 className="text-orange-500">
            {codeSymbol}
        </h1>
        <h1 className="text-green-500">
            Online
        </h1>  
        </div>
        <h1 className="text-white">
            {currentUserData?.name}
        </h1>
        
    </div>
  )
}

export default Header