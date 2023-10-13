
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface MarkdownRenderProps {
    post: any
}

interface Mark {
    node: any;
    inline: any;
    className: any;
    children: any;

}

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

![Alt Text](https://imagedelivery.net/cCutpQSrpIaP0yEOiL1OGw/0d222fd9-f16d-4aa4-af2c-31e978b2ab00/fullsize)
A table:

| a | b |
| - | - |
`

function CodeBlock({
  markdown,
  ...rest
}: {
  markdown: string
}) {
  return (
    <SyntaxHighlighter
      showLineNumbers={false}
      useInlineStyles={false}
    children={markdown}
      style={tomorrow}
      wrapLongLines
      {...rest}
    />
  )
}





export function MarkdownRender(post: MarkdownRenderProps) {
    

    
const components = CodeBlock(post as any)

    return (
        <Markdown 
        remarkPlugins={[remarkGfm ]}
        rehypePlugins={[
            rehypeSlug,
            [rehypeSanitize],
            [rehypeAutolinkHeadings, {
                behavior: 'wrap'
            }]
        ]}
        components={components as any}
        >
            {post?.post}
        </Markdown>
    )
}