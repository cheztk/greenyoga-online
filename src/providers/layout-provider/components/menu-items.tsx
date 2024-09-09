
import usersGlobalStore, { IUsersGlobalStore } from '@/store/users-store';
import { useAuth } from '@clerk/nextjs';
import { Button, message } from 'antd';
import { on } from 'events';

import { Banknote, BookOpenText,GalleryHorizontal,List, User2,Home, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import path from 'path';
import React from 'react'

function MenuItems({setShowSideBar}:{setShowSideBar:(value:boolean) => void}) {

    const [loading, setLoading] = React.useState(false);
    const {signOut} = useAuth();
    const pathName = usePathname();
    const {currentUserData} = usersGlobalStore() as IUsersGlobalStore;
    const router = useRouter();
    const userMenuItems = [{
        name:'Enrolled Courses',
        icon: <BookOpenText size={14}/>,
        isActive: pathName === "/user/enrolled-courses",
        path: "/user/enrolled-courses"
    },{
        name:'Profile',
        icon: <User2 size={14}/>,
        isActive: pathName === "/user/profile",
        path: "/user/profile"
    }
];
    const adminMenuItems = [
    {
        name:'Home',
        icon: <Home size={14}/>,
        isActive: pathName === "/",
        path: "/"
    },
        {
        name:'Courses',
        icon: <BookOpenText size={14}/>,
        isActive: pathName === "/admin/courses",
        path: "/admin/courses"
    },
    {
        name:'Studuents',
        icon: <List size={14}/>, 
        isActive: pathName === "/admin/students",
        path: "/admin/students"
    },
    {
        name:'Media Library',
        icon: <GalleryHorizontal size={14}/>,
        isActive: pathName === "/admin/media-library",
        path: "/admin/media-library"
    },
    {
        name:'Enrollments',
        icon: <User2 size={14}/>,
        isActive: pathName === "/admin/enrollments",
        path: "/admin/enrollments"

    },
    {
        name: 'Reports',
        icon: <Banknote size={14}/>,
        isActive: pathName === "/admin/reports",
        path: "/admin/reports"
    }];
    let menuItemsToRender = currentUserData?.isAdmin ? adminMenuItems : userMenuItems;
    const onLogout = async () => {
        try{
            setLoading(true);
            await signOut();
            message.success("Logged out successfully");
            router.push('/sign-in');
        }catch(error:any){
            message.error("Failed to logout");
        }finally{
            setLoading(false);
            setShowSideBar(false);
        }
    }    
    return (
    <div className='flex flex-col gap-7'>
    {menuItemsToRender.map((item, index) => (
        <div className={`flex gap-3 items-center cursor-pointer 
    ${item.isActive ? "bg-gray-200":""}`} key={index}
    onClick={
        () => {
        router.push(item.path);
        setShowSideBar(false);}
        
    }
    >
            
                {item.icon}
                <span className='text-grey-600 text-sm'>{item.name}</span> 
      

        
        </div>
    ))}
      <Button 
        onClick={onLogout}
        icon={<LogOut size={14}/>}
        loading={loading}
        >
        Logout
        </Button>
    </div>
  )

}

export default MenuItems