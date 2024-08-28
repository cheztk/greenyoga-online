import { UserButton } from "@clerk/nextjs";
import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div className='p-5 flex flex-col gap-5 justify-center '>
        <h1>Green Yoga Online</h1>
       
         <UserButton/> 
        
      </div>  
  );
}
