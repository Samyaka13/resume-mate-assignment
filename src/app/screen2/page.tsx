"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useReactToPrint } from "react-to-print";
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useFormStore } from '../store/useFormStore';
import PrintableCard from '@/components/PrintableCard';

function Page() {
    const printComponent = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        contentRef: printComponent
    });
    const { data } = useFormStore();
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-start px-4 py-8 min-h-screen bg-gray-50 relative">
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <Button
                    onClick={() => router.back()}
                    className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-3 py-2 sm:px-4 sm:py-2 rounded flex items-center gap-2 text-sm sm:text-base"
                >
                    <Image width={18} height={18} src="/chevron-left.svg" alt="Back icon" />
                    Back
                </Button>
            </div>

            <div className="w-full mt-20 sm:mt-24 max-w-full sm:max-w-2xl px-2 sm:px-0">
                <PrintableCard ref={printComponent} />
            </div>

            <div className="mt-8 sm:mt-10 w-full flex justify-center">
                <Button
                    type='button'
                    onClick={handlePrint}
                    className='w-full max-w-xs sm:w-60 bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold rounded-lg px-6 py-3 flex items-center justify-center gap-2 text-sm sm:text-base'
                >
                    <Image width={20} height={20} src="/Download.svg" alt="Download icon" />
                    Download PDF
                </Button>
            </div>
        </div>
    );
}

export default Page;
