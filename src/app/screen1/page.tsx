"use client"
import React, { useRef } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Card } from '../../components/ui/card'
import Image from 'next/image'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form'
import { FormSchema } from '@/validators/FormValidator'
import z from 'zod'
import { useRouter } from 'next/navigation'
import { useFormStore } from '../store/useFormStore'
import PrintableCard from '@/components/PrintableCard'
import { useReactToPrint } from 'react-to-print'

function Screen1() {
    const { setAll, data } = useFormStore()
    const formFields = [
        { name: "name", label: "Name", placeholder: "Enter your name", icon: "/user.svg" },
        { name: "email", label: "Email", placeholder: "Enter your email", icon: "/mail.svg" },
        { name: "phone", label: "Phone", placeholder: "Enter your phone number", icon: "/phone-call.svg" },
        { name: "position", label: "Position", placeholder: "Enter the position", icon: "/position.svg" },
        { name: "description", label: "Description", placeholder: "Enter description", icon: "/Description.svg" },
    ];

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            position: data.position || "",
            description: data.description || "",
        }
    })

    const router = useRouter()
    const printableRef = useRef<HTMLDivElement>(null)

    const handlePrint = useReactToPrint({
        contentRef: printableRef
    })

    const submitHandler = (formData: z.infer<typeof FormSchema>) => {
        setAll(formData)
        setTimeout(() => {
            handlePrint()
        }, 100)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 py-10">
            <div className="hidden">
                <div ref={printableRef}>
                    <PrintableCard />
                </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center w-full">Add your details</h1>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitHandler)}
                    className="w-full max-w-2xl flex flex-col gap-5"
                >
                    <Card className="p-6 sm:p-8 md:p-10 shadow-lg w-full">
                        {formFields.map((field) => (
                            <FormField
                                key={field.name}
                                control={form.control}
                                name={field.name as keyof z.infer<typeof FormSchema>}
                                render={({ field: formField }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="flex items-center font-bold text-base sm:text-lg gap-2">
                                            <Image src={field.icon} width={20} height={20} alt={`${field.label} icon`} />
                                            {field.label}
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder={field.placeholder} {...formField} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full">
                            <Button
                                type="button"
                                onClick={async () => {
                                    const isValid = await form.trigger()
                                    if (isValid) {
                                        const values = form.getValues()
                                        setAll(values)
                                        router.push('/screen2')
                                    }
                                }}
                                className="w-full sm:w-1/2 bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold rounded-lg px-6 py-3"
                            >
                                View PDF
                            </Button>

                            <Button
                                type='submit'
                                className="w-full sm:w-1/2 bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold rounded-lg px-6 py-3 flex items-center justify-center gap-2"
                            >
                                <Image width={24} height={24} src="/Download.svg" alt="Download icon" />
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
