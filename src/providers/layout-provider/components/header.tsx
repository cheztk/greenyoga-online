import usersGlobalStore, { IUsersGlobalStore } from '@/store/users-store';
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {    
    const rounter = useRouter();
    const codeSymbol = '</>'
    const {currentUserData} = usersGlobalStore() as IUsersGlobalStore;
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
        <div className='flex items-center gap-2'>
          <h1 className="text-white">
            {currentUserData?.name}
        </h1>  
        <img src={currentUserData?.profilePic} alt="profile pic" className='h-8 w-8 rounded-full' />
            </div>
        
        
    </div>
  )
}

export default Header