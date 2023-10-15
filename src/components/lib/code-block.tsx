import react from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';

export function CodeBlock({
    text,
    language,
    ...rest
}: {
    text: string;
    language: string;
    [key: string]: any;
}) {
    return (
        <SyntaxHighlighter 
        showInlineLineNumbers={false}
        useInlineStyles={false}
        language={language}
        children={text}
        wrapLongLines
        {...rest}
        />
    )
}