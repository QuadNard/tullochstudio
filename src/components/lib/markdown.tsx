import deepmerge from 'deepmerge'
import Link from 'next/link'
import rehypeSlug from 'rehype-slug'
import * as React from 'react'
import Markdown from 'react-markdown'
import { CodeBlock } from './code-block'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'


var linkifyRegex = require('remark-linkify-regex');

function LinkRenderer({ href, ...rest}: any) {
    if (href.startsWith('#')) {
        return <a href={href} {...rest} />
    }
}



function getComponentsForVariant(variant: any) {
    switch (variant) {
        case 'longform': {
            return {
                a: LinkRenderer,
                pre({ node, inline, className, children, ...props}: {
                    className: string
                    children: React.ReactNode
                    inline: boolean
                    node: any
                }) {
                    const language = /language-(\w+)/.exec(className || '')?.[1]
                    return !inline && language ? (
                        <CodeBlock
                            text={String(children).replace(/\n$/, '')}
                            language={language}
                            {...props}
                    />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                },
            }
        }
        case 'comment': {
            return {
                a: LinkRenderer,
                h1: 'p',
                h2: 'p',
                h3: 'p',
                h4: 'p',
                h5: 'p',
                h6: 'p',
                pre({ children }: any ) {
                    return <>{children}</>
                },
                code({ node, inline, className, children, ...props }:{
                    className: string
                    children: React.ReactNode
                    inline: boolean
                    node: any
                }) {
                    const language = /language-(\w+)/.exec(className || '')?.[1] 
                    return !inline && language ? (
                        <CodeBlock   
                        text={String(children).replace(/\n$/, '')}
                        language={language}
                        {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }
        }
    }
}


export function MarkdownRenderer(props: any) {
    const { children, variant = 'longform', ...rest } = props;

    const schema = deepmerge(defaultSchema, {
        tagNames: [...defaultSchema.tagNames || [], 'sup', 'sub', 'section'] ,
        attributes: {
            '*': ['className'],
        },
        clobberPrefix: '',
        clobber: ['name', 'id'],
    })

    const components = getComponentsForVariant(variant)

    return (
   <Markdown
   {...rest}
   remarkPlugins={[
    remarkGfm,
    linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)
   ]}
   rehypePlugins={[
    [rehypeSanitize, schema],
    rehypeSlug, 
    [rehypeAutolinkHeadings, {behavior: 'wrap'}]
   ]}
    components={components}
   >
         {children}
   </Markdown>
    )
}