import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './card'
import Image from 'next/image'
import { Input } from './input'
import { Label } from './label'
function Screen1() {

    return (
        <div className='flex flex-col gap-5 w-full justify-center items-center'>

            <h1 className='flex font-bold text-4xl justify-center items-center w-full'>Add your details</h1>
            <Card className='w-full p-10'>
                <Card className='flex w-full h-15 justify-center p-1.5'>
                    <CardHeader className='flex items-center gap-3'>
                        <Image width={30} height={30} src="/user.svg" alt="Name icon" />
                        <CardTitle className='flex gap-4 '>
                            <Label htmlFor="text" className='font-semibold text-xl'>Name</Label>
                            <Input placeholder='eg: Jhon Doe' className='' />
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className='flex w-full h-15 justify-center p-1.5'>
                    <CardHeader className='flex items-center gap-3'>
                        <Image width={30} height={30} src="/mail.svg" alt="Name icon" />
                        <CardTitle className='flex gap-4 '>
                            <Label htmlFor="email" className='font-semibold text-xl'>Email</Label>
                            <Input placeholder='eg:Jhondoe@gmail.com' />
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className='flex w-full h-15 justify-center p-1.5'>
                    <CardHeader className='flex items-center gap-3'>
                        <Image width={30} height={30} src="/phone-call.svg" alt="Name icon" />
                        <CardTitle className='flex gap-4 '>
                            <Label htmlFor="phone" className='font-semibold text-xl'>Name</Label>
                            <Input placeholder='eg:+91 987654321' className='' />
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className='flex w-full h-15 justify-center p-1.5'>
                    <CardHeader className='flex items-center gap-3'>
                        <Image width={30} height={30} src="/position.svg" alt="Name icon" />
                        <CardTitle className='flex gap-4 '>
                            <Label htmlFor="text" className='font-semibold text-xl'>Position</Label>
                            <Input placeholder='eg:Junior Front End Developer' className='' />
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className='flex w-full h-15 justify-center p-1.5'>
                    <CardHeader className='flex items-center gap-3'>
                        <Image width={30} height={30} src="/Description.svg" alt="Name icon" />
                        <CardTitle className='flex gap-4 '>
                            <Label htmlFor="text" className='font-semibold text-xl'>Description</Label>
                            <Input placeholder='eg: Work experiences' className='' />
                        </CardTitle>
                    </CardHeader>
                </Card>
            </Card>
        </div>
    )
}

export default Screen1
