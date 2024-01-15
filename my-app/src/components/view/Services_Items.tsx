import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'

const Services_Items = () => {
    return (
        <Wrapper>
            <div className='flex justify-between items-center mt-16'>
                <div className='flex flex-col flex-1 items-center justify-center space-y-4'>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center mx-auto">
                        Managed Security Services
                    </h3>
                    <p className='max-w-sm text-center mx-auto'>DWS works with high–profile vendor solutions to give you the right package around all your solutions and compliance. For example, we can provide and build advanced security
                        operations to center and revitalize your governance</p>
                    <Button className='text-center mx-auto' variant="outline">LEARN MORE</Button>
                </div>
                <div className='flex-1'>
                    <Image src={'/services1.png'} alt="services" width={500} height={500} />
                </div>
            </div>
        </Wrapper>
    )
}

export default Services_Items