import usersGlobalStore, { IUsersGlobalStore } from '@/store/users-store';
import { Button, Drawer } from 'antd';
import { useRouter } from 'next/navigation'
import React from 'react'
import MenuItems from './menu-items';

function Header() {    
    const rounter = useRouter();
    const codeSymbol = '</>'
    const {currentUserData} = usersGlobalStore() as IUsersGlobalStore;
    const [showSideBar, setShowSideBar] = React.useState(false);
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
          <h1 className="text-white text-sm">
            {currentUserData?.name}
        </h1>  
        <Button 
            className='border-none'
            icon={<img  
                src={currentUserData?.profilePic}  className='h-8 w-8 rounded-full' 
                    onClick={() => setShowSideBar(true)}
        
                />}
            type='text'
        ></Button>
            
       
        
        {showSideBar && (
            <Drawer
            open={showSideBar}
            onClose={() => setShowSideBar(false)}
            title={currentUserData?.name}
            >
                <MenuItems setShowSideBar={setShowSideBar}/>
            </Drawer>
        )}
            </div>
        
        
    </div>
  )
}

export default Header