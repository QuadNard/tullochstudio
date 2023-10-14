import Link from 'next/link'



const Footer = () => {
    return (
        <footer className='z-10 py-8 '>
            <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 pt-10'>
                <div className='xl:grid xl:grid-cols-5 xl:gap-8'>
                    <div className='space-y-8 xl:col-span-2'>
                        <Link href='/'>
                            <span className=' font-bold text-3xl text-gray-700'>Tullochstudio</span>
                        </Link>
                        <p className='max-w-xs text-sm text-gray-500'>
                            Giving modern marketing teams superpowers with short links that stand out.
                        </p>
                    </div>
                    <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0'>
                        <div className='md:grid md:grid-cols-4 md:gap-8'>
                            <div>
                                 <h3 className='text-sm font-semibold text-gray-900 cursor-pointer'>Features</h3>
                            </div>
                            <div>
                                 <h3 className='text-sm font-semibold text-gray-900'>Features</h3>
                            </div>
                            <div>
                                 <h3 className='text-sm font-semibold text-gray-900'>Features</h3>
                            </div>
                            <div>
                                 <h3 className='text-sm font-semibold text-gray-900'>Features</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
                    <p className='text-sm leading-5 text-gray-500'>© 2023 justin tulloch</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer