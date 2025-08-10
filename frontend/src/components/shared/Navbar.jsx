import React from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = false;
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-red-600'>Portal</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browser</li>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-2'>
                <Link to="/login"><Button variant='outline'> Login </Button></Link>
                <Link to="/signup"><Button className='bg-[#6A38C2] hover:bg-[#6A38C2'>Signup</Button></Link>
              </div>
            ) :
              (
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className='cursor-pointer'>
                      <AvatarImage className='size-10 ' src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className='w-89'>
                    <div className='flex gap-2 space-y-2'>
                      <Avatar className='cursor-pointer'>
                        <AvatarImage className='size-10 ' src="https://github.com/shadcn.png" alt="@shadcn" />
                      </Avatar>
                      <div>
                        <h4 className='font-medium'>Patel MernStack</h4>
                        <p className='text-sm text-muted-foreground'>This is Pankaj sahu I am web Developer</p>
                      </div>
                    </div>
                    <div className='flex flex-col text-gray-600'>

                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2 />
                        <Button variant="link">View Profile</Button>
                      </div>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <LogOut />
                        <Button variant="link">Logout</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
