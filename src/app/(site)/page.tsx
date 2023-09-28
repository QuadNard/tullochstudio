import { InfoCard, ProfileCard, ProjectCard, StatsCard }  from '@/components/clients/Cards';
import Docs from '@/components/clients/Docs';
import  FadeUp  from '@/components/ui/FadeUp';
import BannerIntro from '@/components/ui/Banner';
import Contact from '@/components/clients/Contact';



export const metadata = {
    title: 'Home',
    description: 'The home page',
}

export default function HomePage() {
    console.log('Server');
    return (
        <div className='flex h-full flex-col items-center justify-center'>
            <section id='home' className='flex w-full max-h-full p-10 justify-center '>
                <BannerIntro />
            </section>
            <section id='projects' className='flex w-full max-h-full p-10 justify-center mt-8'>
                <div className='flex flex-col'>
                    <FadeUp> 
                    <h1 className="text-5xl flex flex-col items-center pt-14">Projects</h1>
                    </FadeUp>
                    <div className='mt-10 grid gap-4 text-left md:mt-20 md:grid-cols-6 md:gap-6'>
                        <InfoCard />
                        <StatsCard />
                        <ProjectCard />
                        <ProfileCard />
                    </div>
                </div>
                
            </section>
            <section id='writings' className='flex w-full max-h-full p-10 justify-center'>
                <FadeUp>
                    <Docs />
                </FadeUp>
            </section>
            <section id='contact' className='flex w-full max-h-full p-10 justify-center '>
                <FadeUp>
                    <h1 className="pt-12 text-5xl">CONTACT</h1>
                      <Contact />
                </FadeUp>
            </section>
        </div>
    )
}