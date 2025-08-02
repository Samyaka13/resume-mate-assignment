"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardHeader, CardTitle } from './card'
import Image from 'next/image'
import { Input } from './input'
import { Label } from './label'
import { Button } from './button'
import { useForm } from 'react-hook-form'
import { Inputs } from '@/types/FormType'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { FormSchema } from '@/validators/FormValidator'
import z from 'zod'
function Screen1() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues :{
            name:"",
            email:"",
            phone:"",
            position:"",
            description:""
        }
    })
    const submitHandler = (data: z.infer<typeof FormSchema>) => console.log(data);
    return (
        <div className='flex flex-col gap-5 w-full justify-center items-center'>
            <h1 className='flex font-bold text-4xl justify-center items-center w-full'>Add your details</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitHandler)} className='flex flex-col gap-5 items-center w-full'>
                    <Card className='w-full p-10 justify-center items-center'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem className='flex w-3/4 h-15 justify-center p-1.5'>
                                    <Card className='flex w-full h-15 justify-center  p-1.5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <Image width={30} height={30} src="/user.svg" alt="Name icon" />
                                            <CardTitle className='flex gap-4 '>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="eg: John Doe" {...field} />
                                                </FormControl>
                                                 <FormMessage />    
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className='flex w-3/4 h-15 justify-center p-1.5'>
                                    <Card className='flex w-full h-15 justify-center  p-1.5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <Image width={30} height={30} src="/mail.svg" alt="Email icon" />
                                            <CardTitle className='flex gap-4 '>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='eg:Jhondoe@gmail.com' {...field} />
                                                </FormControl>
                                                 <FormMessage />
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phone'
                            render={({ field }) => (
                                <FormItem className='flex w-3/4 h-15 justify-center p-1.5'>
                                    <Card className='flex w-full h-15 justify-center  p-1.5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <Image width={30} height={30} src="/phone-call.svg" alt="Email icon" />
                                            <CardTitle className='flex gap-4 '>
                                                <FormLabel>Contact</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='eg:+91 987654321' {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='position'
                            render={({ field }) => (
                                <FormItem className='flex w-3/4 h-15 justify-center p-1.5'>
                                    <Card className='flex w-full h-15 justify-center  p-1.5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <Image width={30} height={30} src="/position.svg" alt="Position icon" />
                                            <CardTitle className='flex gap-4 '>
                                                <FormLabel>Position</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='eg:Junior Front End Developer' {...field} />
                                                </FormControl>
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='description'
                            render={({ field }) => (
                                <FormItem className='flex w-3/4 h-15 justify-center p-1.5'>
                                    <Card className='flex w-full h-15 justify-center  p-1.5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <Image width={30} height={30} src="/Description.svg" alt="Description icon" />
                                            <CardTitle className='flex gap-4 '>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='eg: Work experiences' {...field} />
                                                </FormControl>
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </FormItem>
                            )}
                        />
                        <div className='flex w-full justify-center gap-3.5'>
                            <Button type='button' className=' w-3/7 cursor-pointer'>
                                View PDF
                            </Button>
                            <Button type='submit' className=' w-3/7 cursor-pointer'>
                                Download PDF
                            </Button>
                        </div>
                    </Card>
                </form>
            </Form>
        </div>
    )
}

export default Screen1
