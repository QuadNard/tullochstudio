import Header from "@/components/layout/header"
import IntroPage from "@/components/pages/intro"
import ProjectPage from "@/components/pages/projects"
import DocsPage from "@/components/pages/documents"
import ContactPage from "@/components/pages/contact"
import Footer from "@/components/layout/footer"
import { Suspense } from 'react'

export const metadata = {
  title: "Home",
  description: "The home page",
}

async function getCategories() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getCategories`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function HomePage() {
  const categories = await getCategories()

  return (
    <div id="pageWrapper" className="w-fit max-w-6xl gap-16 m-auto p-2 pb-30">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <Suspense fallback={<p>Loading intro...</p>}>
            <section id="intro">
          <IntroPage />
          </section>
        </Suspense>
        <Suspense fallback={<p>Loading projects...</p>}>
            <section  className="">
          <ProjectPage />
        </section>
        </Suspense>
          <Suspense fallback={<p>Loading documents...</p>}>
            <section className="">
              <DocsPage />
            </section>
          </Suspense>
          <Suspense fallback={<p>Loading contact...</p>}>
              <section className="">
                <ContactPage />
              </section>
          </Suspense>
      </div>
      <Footer />
    </div>
  )
}
