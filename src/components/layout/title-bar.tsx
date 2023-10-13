import Link from 'next/link';
import * as React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { CiSquareRemove } from 'react-icons/ci';
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
    title: string;
    globalMenu?: boolean;
    backButton?: boolean;
    backButtonHref?: string;
    magicTitle?: boolean;
    scrollContainerRef: any;
    children?: React.ReactNode;
    leadingAccessory?: React.ReactNode;
    trailingAccessory?: React.ReactNode; 
}

export function TitleBar({
    title,
    globalMenu = true,
    backButton = false,
    leadingAccessory = null,
    trailingAccessory,
    children,


}: Props){
   const [isOpen, setIsOpen] = React.useState(false);



    return (
        <div className={`filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900`}>
            <div className='flex items-center justify-between flex-none'>
                <span className='flex items-center space-x-3'>
                    {globalMenu && (
                        <span 
                        onClick={() => setIsOpen(!isOpen)}
                        className='flex items-center justify-center p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden'> 
                            {isOpen ? (
                                <CiSquareRemove width={20} height={20} className='w-8 h-8' />
                            ) : (
                                    <AiOutlineMenu width={16} height={16} className='w-6 h-6' />  
                            )}
                        </span>
                    )}
                    {backButton && (
                        <Link href='/' className='flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden'>
                            <BsArrowLeft width={16} height={16} className='w-6 h-6' />
                        </Link>
                    )}
                    {leadingAccessory && <>{leadingAccessory}</>}
                    <h2 className='text-sm font-bold text-primary transform-gpu line-clamp-1'>{title}</h2>
                </span>
                 {trailingAccessory && <>{trailingAccessory}</>}
            </div>
             <div>{children}</div>
        </div>
    )
}

export default TitleBar;