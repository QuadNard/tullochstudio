
import Footer from './footer';
import Header from './header';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
    <section className='overflow-x-hidden'>
      <div className='flex min-h-screen flex-col'>  
          <div  id='bkg' className='bg-default-bkg h-screen dark:bg-black'>
            <div className='text-regal-purple bg-default-bkg bg-gradient-blue dark:bg-gradient-gotham antialiased'>
            <main>
              <Header />
              {children}
              <Footer />
              </main>
            </div>
        </div>
      </div>
    </section>
  );
}