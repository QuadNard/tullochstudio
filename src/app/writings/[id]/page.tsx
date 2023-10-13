
import WritingNav from '@/components/layout/writing-nav';
import Button from '@/components/lib/button'
import { CategoriesList } from '@/components/lib/categories-list'
import { LoadingSpinner } from '@/components/lib/loader';
import { FaBeer } from 'react-icons/fa';



export const metadata = {
    title: 'Writings',
    description: 'Writing posts',
}



export default function Writings() {
    return (
        <div className='relative flex h-full min-h-screen w-full'>
            <div className='flex flex-1'>
                <WritingNav />
            </div>
        </div>
    )
}