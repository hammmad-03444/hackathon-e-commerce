import Link from 'next/link'
import React from 'react'
import { Input } from "@/components/ui/input"
import { ChevronDown, MenuIcon, Search, ShoppingCart, UserCircle2 } from 'lucide-react'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const Navbar = () => {
  return (
    <nav className='w-full border-b-2 border-gray-300 p-4 '>
        
       
        <div className='max-w-7xl sm:gap-6 lg:gap-16  flex sm:flex-row sm:items-center sm:mx-auto  lg:justify-center'>


        <div className=' md:hidden'>
            <Sheet >
  <SheetTrigger>
  <Button variant={'outline'} size={'icon'} className='rounded-full'>
                   <MenuIcon/>
                </Button>
  </SheetTrigger>
  <SheetContent className='bg-white text-black' side={'left'}>
    <SheetHeader>
      <SheetTitle>
      MENU
      </SheetTitle>
      <SheetDescription>
      <div className=' gap-6 flex items-start flex-col'>
                <Link className='text-sm font-normal' href={"#"}>
                <DropdownMenu>
  <DropdownMenuTrigger className='flex items-center'>Shop<ChevronDown className='absoulute'/> </DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>Shop</DropdownMenuLabel> */}
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu></Link>
                <Link className='text-sm font-normal' href={"#"}>Contact</Link>
                <Link className='text-sm font-normal' href={"#"}>About</Link>
                <Link className='text-sm font-normal' href={"#"}>Sign Up</Link>
            </div>
            {/* <div className='mt-4'>
            <div className='relative'>
                
                <Input placeholder='What are you looking for?' className='bg-[#F5F5F5] rounded px-4 pr-5'/>
                
                <Search className='absolute right-[-2] top-2 ml-4'/>
                </div>
            </div> */}
            {/* <div className='mt-4 space-x-2'>
            <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                 <ShoppingCart/>
                </Button>
                
                <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                  </>
                </Button>
            </div> */}
       
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

            </div>


            
            <h1 className='font-extrabold  text-2xl'>EXCLUSIVE</h1>

            <div className=' gap-6 hidden md:flex'>
                <Link className='text-sm font-normal' href={"#"}><DropdownMenu>
  <DropdownMenuTrigger className='flex items-center'>Shop<ChevronDown className='absoulute'/> </DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>Shop</DropdownMenuLabel> */}
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</Link>
                <Link className='text-sm font-normal' href={"#"}>Contact</Link>
                <Link className='text-sm font-normal' href={"#"}>About</Link>
                <Link className='text-sm font-normal' href={"#"}>Sign Up</Link>
            </div>
            <div className='gap-4 hidden md:flex' >
                <div className='relative'>
                <Search className='absolute left-2 top-2 space-x-4'/>
                <Input placeholder='What are you looking for?' className='bg-[#F5F5F5] rounded-full px-4 lg:pr-60 pl-10'/>
                
                </div>
                <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                   <ShoppingCart/>
                </Button>
                <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                  <UserCircle2/>
                </Button>
                
            </div>
            
            <div className='md:hidden mx-auto justify-end items-end gap-0 mr-0 pr-0'>
            <Button variant={'ghost'} size={'icon'} className='rounded-full'>
        <Search />
        </Button>
        <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                   <ShoppingCart/>
                </Button>
                <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                  <UserCircle2/>
                </Button>
       
</div>
        </div>
        
    </nav>
  )
}

export default Navbar