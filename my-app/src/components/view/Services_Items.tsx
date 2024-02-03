import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'
import Animation from '@/components/shared/Animation'

const Services_Items = () => {
    return (
        <section className='md:mr-20 md:ml-20 mt-10  '>

            <Wrapper>
                <div className='space-y-5 md:space-y-0'>

                    <div className='flex flex-col md:flex-row justify-between items-center mt-0 md:mt-16 gap-y-5 md:gap-y-0 border'>
                        <Animation delay={1} direction={'left'}>
                            <div className='space-y-8'>

                                <div className='flex flex-1 w-full md:h-full items-start justify-center gap-x-3  p-6 bg-gray-200 rounded-sm border '>
                                    <div className='relative flex flex-col item-center justify-center '>
                                        <p className='bg-gray-50 rounded-full h-24 w-24 '></p>
                                        <div className='absolute m-auto left-3'>

                                            <Image src={"/insurance.png"} alt='Cloud' width={70} height={70} />
                                        </div>
                                    </div>
                                    <div className=''>

                                        <p className="text-sm font-bold tracking-wider leading-relaxed text-gray-400">
                                            SOFTWARE
                                        </p>
                                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left mt-2 mb-4">
                                            Cloud Computing Services 1
                                        </h3>
                                        <div className='max-w-sm text-center mx-auto text-[#3a3a3a] leading-relaxed'>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                        </div>
                                        <Button className='text-center mx-auto mt-2' variant="outline">LEARN MORE</Button>
                                    </div>
                                </div>
                            </div>
                        </Animation>
                        <Animation delay={1} direction={'right'}>

                            <div className='space-y-8'>

                                <div className='flex flex-1 h-full items-start justify-center gap-x-3  p-6 bg-gray-200 border rounded-sm'>
                                    <div className='relative flex flex-col item-center justify-center '>
                                        <p className='bg-gray-50 rounded-full h-24 w-24 '></p>
                                        <div className='absolute m-auto left-3'>

                                            <Image src={"/insurance.png"} alt='Cloud' width={70} height={70} />
                                        </div>
                                    </div>
                                    <div className=''>

                                        <p className="text-sm font-bold tracking-wider leading-relaxed text-gray-400">
                                            SOFTWARE
                                        </p>
                                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left mt-2 mb-4">
                                            Cloud Computing Services 1
                                        </h3>
                                        <div className='max-w-sm text-center mx-auto text-[#3a3a3a] leading-relaxed'>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                        </div>
                                        <Button className='text-center mx-auto mt-2' variant="outline">LEARN MORE</Button>
                                    </div>
                                </div>
                            </div>
                        </Animation>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center mt-0 md:mt-16 gap-y-5 md:gap-y-0'>
                        <Animation delay={2} direction={'left'}>
                            <div className='space-y-8'>

                                <div className='flex flex-1 h-full items-start justify-center gap-x-3  p-6 bg-gray-200 border rounded-sm'>
                                    <div className='relative flex flex-col item-center justify-center '>
                                        <p className='bg-gray-50 rounded-full h-24 w-24 '></p>
                                        <div className='absolute m-auto left-3'>

                                            <Image src={"/insurance.png"} alt='Cloud' width={70} height={70} />
                                        </div>
                                    </div>
                                    <div className=''>

                                        <p className="text-sm font-bold tracking-wider leading-relaxed text-gray-400">
                                            SOFTWARE
                                        </p>
                                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left mt-2 mb-4">
                                            Cloud Computing Services 1
                                        </h3>
                                        <div className='max-w-sm text-center mx-auto text-[#3a3a3a] leading-relaxed'>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                        </div>
                                        <Button className='text-center mx-auto mt-2' variant="outline">LEARN MORE</Button>
                                    </div>
                                </div>
                            </div>
                        </Animation>
                        <Animation delay={2} direction={'right'}>

                            <div className='space-y-8'>

                                <div className='flex flex-1 h-full items-start justify-center gap-x-3  p-6 bg-gray-200 border rounded-sm'>
                                    <div className='relative flex flex-col item-center justify-center '>
                                        <p className='bg-gray-50 rounded-full h-24 w-24 '></p>
                                        <div className='absolute m-auto left-3'>

                                            <Image src={"/insurance.png"} alt='Cloud' width={70} height={70} />
                                        </div>
                                    </div>
                                    <div className=''>

                                        <p className="text-sm font-bold tracking-wider leading-relaxed text-gray-400">
                                            SOFTWARE
                                        </p>
                                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left mt-2 mb-4">
                                            Cloud Computing Services 1
                                        </h3>
                                        <div className='max-w-sm text-center mx-auto text-[#3a3a3a] leading-relaxed'>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                        </div>
                                        <Button className='text-center mx-auto mt-2' variant="outline">LEARN MORE</Button>
                                    </div>
                                </div>
                            </div>
                        </Animation>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center mt-0 md:mt-16 gap-y-5 md:gap-y-0'>
                        <Animation delay={2} direction={'left'}>
                            <div className='space-y-8'>

                                <div className='flex flex-1 h-full items-start justify-center gap-x-3  p-6 bg-gray-200 border rounded-sm'>
                                    <div className='relative flex flex-col item-center justify-center '>
                                        <p className='bg-gray-50 rounded-full h-24 w-24 '></p>
                                        <div className='absolute m-auto left-3'>

                                            <Image src={"/insurance.png"} alt='Cloud' width={70} height={70} />
                                        </div>
                                    </div>
                                    <div className=''>

                                        <p className="text-sm font-bold tracking-wider leading-relaxed text-gray-400">
                                            SOFTWARE
                                        </p>
                                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left mt-2 mb-4">
                                            Cloud Computing Services 1
                                        </h3>
                                        <div className='max-w-sm text-center mx-auto text-[#3a3a3a] leading-relaxed'>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                        </div>
                                        <Button className='text-center mx-auto mt-2' variant="outline">LEARN MORE</Button>
                                    </div>
                                </div>
                            </div>
                        </Animation>
                        <Animation delay={2} direction={'right'}>

                            <div className='space-y-8'>

                                <div className='flex flex-1 h-full items-start justify-center gap-x-3  p-6 bg-gray-200 border rounded-sm'>
                                    <div className='relative flex flex-col item-center justify-center '>
                                        <p className='bg-gray-50 rounded-full h-24 w-24 '></p>
                                        <div className='absolute m-auto left-3'>

                                            <Image src={"/insurance.png"} alt='Cloud' width={70} height={70} />
                                        </div>
                                    </div>
                                    <div className=''>

                                        <p className="text-sm font-bold tracking-wider leading-relaxed text-gray-400">
                                            SOFTWARE
                                        </p>
                                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left mt-2 mb-4">
                                            Cloud Computing Services 1
                                        </h3>
                                        <div className='max-w-sm text-center mx-auto text-[#3a3a3a] leading-relaxed'>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                            <p className=''>Cloud Infrastructure Setup and Management</p>
                                        </div>
                                        <Button className='text-center mx-auto mt-2' variant="outline">LEARN MORE</Button>
                                    </div>
                                </div>
                            </div>
                        </Animation>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Services_Items