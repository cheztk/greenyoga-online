"use client";

import { usePathname } from 'next/navigation'
import {useEffect, useState} from 'react'
import Header from './components/header';

import { getCurrentUserFromMongoDB } from '@/server-actions/user';
import { message } from 'antd';
import Spinner from '@/components/spinner';

function LayoutProvider({children}: {children: React.ReactNode}) {
  const [loading, setLoading] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);
  const pathName = usePathname();
  const isAuthRoute = pathName.includes('/sign');

  const getCurrentUser = async () => {
    try{
      setLoading(true);
      const {success,data} = await getCurrentUserFromMongoDB();
      if(success){
        setCurrentUserData(data);
      } else{
        throw new Error('An error occurred while fetching user data');
      }
    }catch(error:any){
      setCurrentUserData(null);
      message.error(error.message);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if(!isAuthRoute){
      getCurrentUser();
    }
    
  },[])

  if(isAuthRoute){
    return children

  }
  if(loading){
    return(
      <div className="flex justify-center items-center h-screen">
     <Spinner /> 
    </div>
    ) 
  }
    return (
    <div>
        <Header currentUserData={currentUserData} />
        <div className="p-5">
           {children} 
        </div>
        
    </div>
  )
}

export default LayoutProvider

