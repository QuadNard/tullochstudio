import PostList from '@/components/lib/post-list';
import { useCategoryStore } from '@/store';





export default function Writings() {

    return (
        <div className='bg-dots h-screen'>
        <div className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4  lg:mx-auto'>
            <div className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
                <PostList />
            </div>
        </div>
        </div>
    )
}



