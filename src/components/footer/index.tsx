import React from 'react'

function Footer() {
  return (
    <div className='bg-black px-5 md:px-20 py-20 text-white'>

        <div className='flex flex-row justify-between items-center'>
            <div className='text-sm basis-1/2'>
                Aquinus Farms
            </div>
            <div className='font-bold text-2xl basis-1/2'>
                Poultry at your doorstep
            </div>
        </div>

        <div className='flex flex-row justify-between items-start mt-10'>
            <div className='flex flex-col basis-1/2'>
                <div className='text-base font-[500] mb-5'>
                    CONNECT WITH US
                </div>

                <div className='text-sm'>
                    <p className='hover:underline cursor-pointer'>Instagram</p>
                    <p className='hover:underline cursor-pointer'>Facebook</p>
                </div>
            </div>

            <div className='basis-1/2'>
                <p className='text-base font-[500]'>
                    OUR LOCATIONS
                </p>

                <div className='flex flex-row justify-between items-start mt-5'>
                    <div>
                        Kijitonyama <br/> Headquarters
                    </div>
                    <div>
                        Goba Farm Branch
                    </div>
                    <div>
                        Kidomole Farm and <br/> Training Camp
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-10'>
            <p>dendunguru@yahoo.co.uk</p>
            <p>+255 655 347 932</p>
        </div>
    </div>  
  )
}

export default Footer