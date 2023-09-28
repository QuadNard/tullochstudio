
import Link from 'next/link';
import { navigations } from '@/utils/constants';
import Image from 'next/image';



const Header =  () => {


return (
    <header className='h-full  px-4 text-black flex flex-col app__navbar'>
        <section className='mx-auto flex max-w-6xl items-center justify-between py-4'>
                <div className='flex items-center justify-start gap-6'>
                    <Link href='/' className='font-bold '>
                    </Link>
                    <nav>
                        <ul className='flex items-center justify-start gap-3'>
                        {navigations.map(({ id, name, path }) => (
                                <li key={id}>
                                    <Link href={path}>
                                        <h4 className='px-2 pt-5 pb-2 text-sm font-medium text-opacity-40 transition duration-100 ease-in-out transform hover:text-blue-400 hover:scale-105'>{name}</h4>
                                    </Link>
                                </li>
                        ))}
                        </ul>
                    </nav>
                </div>
        </section>
    </header>
    )
}

export default Header;