
import Home from '@/components/Home'

import Gallery from '@/components/Projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Docs from '@/components/Docs';
import StickyCursor from '@/components/ui/stickyCursor';



export const metadata = {
    title: 'Home',
    description: 'The home page',
}

export default function HomePage() {
    return (
        <>
        <Header />
        <Home />
        <Gallery />
        <Docs />
        <Contact />
        <Footer />
        </>
    )
}