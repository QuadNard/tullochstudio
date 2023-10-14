import { getPostBySlug } from "@/lib/markdown/posts"

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug)

  return (
    <>
      <div className=" flex flex-col items-center justify-center p-8">
        return home !
      </div>
      <main className="mx-auto w-full flex max-w-3xl flex-1  items-center justify-center">
        <div className="flex flex-col space-y-4 pt-24 px-6 md:px-0 text-black  sm:pt-28 md:space-y-0">
          <div className="py-4 mx-2 prose  text-black">{content}</div>
        </div>
      </main>
    </>
  )
}

export default Page
