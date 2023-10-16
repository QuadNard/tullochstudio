"use client"

import { formatDate } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { LayoutGroup } from "framer-motion"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import Markdown from "react-markdown"
import React, { useEffect, useState } from "react"
import { FaBeer } from "react-icons/fa"
import rehypeDocument from "rehype-document"
import Button from "../lib/button"
import remarkGfm from "remark-gfm"
import { ActiveIdProvider, useActiveId } from "../../server/active-provider"
import { Detail } from "../layout/detail-props"


interface ListContainerProps {
  onRef: (ref: any) => void
  children: React.ReactNode
}

interface PreviewPostProps {
  createdAt: string
  title: string
  content: string
}



export default function WritingPage() {
  const perimeter = useParams()

  const { data: posts } = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      const { data } = await axios.get("/api/posts")
      return data
    },
  })
  
  const filtered = posts?.getPosts.filter(
    (post: any) => post.category_id === perimeter.id
  )


  let [scrollContainerRef, setScrollContainerRef] = React.useState(null)

  return (
    <>
      <div>
        <ActiveIdProvider>
          <div className="md:w-full w-screen flex">
            <ListContainer onRef={setScrollContainerRef}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.92)",
                  minHeight: "48px",
                  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px",
                }}
                className="filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900"
              >
                <div className="flex items-center justify-between flex-none">
                  <span className="flex items-center pl-3 space-x-8">
                    <h2 className="text-sm font-bold text-primary transform-gpu line-clamp-1">
                      Writings
                    </h2>
                    <Button
                      icon={<FaBeer width={12} height={12} color={"#000"} />}
                      label="hello"
                      className="default"
                      size="default"
                      raduis="sm"
                      variant="primary"
                    />
                  </span>
                </div>
              </div>
              <div className="lg:space-y-1 lg:p-3">
                {filtered?.map((post: any, idx: number) => {
                  if (post.id === "" || post.id === undefined) {
                    return (
                      <p
                        key={idx}
                        className="flex flex-1 items-center justify-center"
                      >
                        Not Found
                      </p>
                    )
                  } else {
                    return (
                      <PostListItems
                        key={idx}
                        slug={post.title}
                        index={idx}
                        date={post.createdAt}
                        description={post.short_description}
                      />
                    )
                  }
                })}
              </div>
            </ListContainer>
            <div className="bg-dots hidden lg:flex w-full overflow-x-hidden">
              <PreviewPost post={filtered} />
            </div>
          </div>
        </ActiveIdProvider>
      </div>
    </>
  )
}

const PreviewPost = ({ post }: { post: any }) => {
  const { activeId } = useActiveId()
  const [activePost, setActivePost] = useState<PreviewPostProps | null>(null)
  const activeIndex = activeId ?? 0
  const scrollContainerRef = React.useRef(null)

  useEffect(() => {
    if (activeId !== null) {
      const matchingData = post?.find(
        (post: any) => parseInt(post.preview_id) === activeIndex
      )
      setActivePost(matchingData || null)
    } else {
      setActivePost(null)
    }
  }, [activeId, post])

  
 
  return (
    <>
      {activePost ? (
        <Detail.Container ref={scrollContainerRef}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.92)",
              minHeight: "48px",
              boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px",
            }}
            className="filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900"
          >
            <div className="flex items-center justify-between flex-none">
              <h2
                className="text-sm font-bold text-primary transform-gpu line-clamp-1"
                style={{
                  transform: "translateY(0%)",
                  opacity: "1.08",
                }}
              >
                {activePost.title}
              </h2>
            </div>
          </div>
          <Detail.ContentContainer>
            <Detail.Header>
              <Detail.Title>{activePost.title}</Detail.Title>
              <span className="text-tertiary inline-block leading-snug">
                {formatDate(activePost.createdAt)}
              </span>
            </Detail.Header>
        
                <div className="py-6" />
          </Detail.ContentContainer>
        </Detail.Container>
      ) : (
        <p>No item selected</p>
      )}
    </>
  )
}

const PostListItems = ({
  slug,
  index,
  date,
  description,
}: {
  slug: string
  date: string
  index: number
  description: string
}) => {
  const { activeId, setActiveId } = useActiveId()

  const byline = formatDate(date)

  const handleTabClick = (index: number) => {
    setActiveId(index)
  }

  return (
    <>
      <LayoutGroup>
        <div
          onClick={() => handleTabClick(index)}
          className={`flex space-x-3 border-b border-gray-100 py-3 px-3.5 text-sm dark:border-gray-900 lg:rounded-lg lg:border-none lg:py-2  ${
            activeId === index
              ? "bg-black dark:bg-gray-700"
              : "sm:hover:bg-gray-200 sm:dark:hover:bg-gray-800"
          }`}
        >
          <div className="flex flex-col justify-center space-y-1">
            <div
              className={`font-medium line-clamp-3 ${
                activeId === index
                  ? "text-white"
                  : "text-gray-1000 dark:text-gray-100"
              }`}
            >
              {slug}
            </div>
            {description && (
              <div
                className={`line-clamp-2 ${
                  activeId === index
                    ? "text-white text-opacity-80"
                    : "text-gray-1000 text-opacity-60 dark:text-white"
                }`}
              >
                {description}
              </div>
            )}
            {byline && (
              <div
                className={`line-clamp-1 ${
                  activeId === index
                    ? "text-white text-opacity-60"
                    : "text-gray-1000 text-opacity-40 dark:text-white dark:text-opacity-60"
                }`}
              >
                {byline}
              </div>
            )}
          </div>
          <div className="">
            <Link href={`/${slug}`}>
              <Button
                icon={<FaBeer width={5} height={5} color={"#000"} />}
                label="view"
                className="default"
                size="sm"
                raduis="sm"
                variant="primary"
              />
            </Link>
          </div>
        </div>
      </LayoutGroup>
    </>
  )
}

function ListContainer({ onRef, children, ...rest }: ListContainerProps) {
  const scrollContainerRef = React.useRef(null)

  React.useEffect(() => {
    onRef(scrollContainerRef)
  }, [scrollContainerRef])

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-full  max-h-screen min-h-screen w-full flex-none overflow-y-auto border-r border-gray-150 bg-white dark:border-gray-800 dark:bg-gray-900 lg:w-80 lg:bg-gray-50 lg:dark:bg-gray-900 xl:w-96"
      {...rest}
    >
      {children}
    </div>
  )
}
