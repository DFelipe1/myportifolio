import { Components } from "react-markdown";
import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import { Divider } from "@/styles/Divider";
import { styled } from "../../../stitches.config";

const CodeBlock = styled('pre', {
  backgroundColor: '$CodGray950',
  color: '$AlbescentWhite100',
  fontFamily: '$jetbrains_mono',
  fontSize: '$sm',
  lineHeight: '$short',
  padding: '$4',
  borderRadius: '$md',
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

const InlineCode = styled('code', {
  fontFamily: '$jetbrains_mono',
  fontSize: '$sm',
  backgroundColor: '$AlbescentWhite200',
  color: '$CodGray950',
  padding: '2px 6px',
  borderRadius: '$xs',
});

const List = styled('ul', {
  paddingLeft: '$6',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  color: '$CodGray700',
  fontFamily: '$inter',
  fontSize: '$md',
  lineHeight: '$tall',
});

const OrderedList = styled('ol', {
  paddingLeft: '$6',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  color: '$CodGray700',
  fontFamily: '$inter',
  fontSize: '$md',
  lineHeight: '$tall',
});

const Blockquote = styled('blockquote', {
  borderLeft: '4px solid $AlbescentWhite300',
  padding: '$2 $4',
  margin: 0,
  fontFamily: '$inter',
  fontSize: '$md',
  fontStyle: 'italic',
  lineHeight: '$tall',
  color: '$CodGray700',
  backgroundColor: '$AlbescentWhite50',
  borderRadius: '0 $md $md 0',
});

const Link = styled('a', {
  color: '$CodGray950',
  fontWeight: '$semibold',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  transition: 'color 0.2s',

  '&:hover': {
    color: '$CodGray700',
  },
});

const Image = styled('img', {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '$md',
  margin: '$4 0',
});

const Strong = styled('strong', {
  fontWeight: '$bold',
  color: '$CodGray950',
});

const ContentParagraph = styled('p', {
  margin: 0,
  fontFamily: '$inter',
  fontSize: '$md',
  lineHeight: '$tall',
  color: '$CodGray700',
});

export const markdownComponents: Components = {
  h1: ({ children, ...props }) => (
    <Heading as="h2" size="md" css={{ marginTop: '$6', marginBottom: '$2' }} {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }) => (
    <Heading as="h2" size="sm" css={{ marginTop: '$6', marginBottom: '$2' }} {...props}>
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }) => (
    <Heading as="h3" size="sm" css={{ fontSize: '$xl', marginTop: '$4', marginBottom: '$1' }} {...props}>
      {children}
    </Heading>
  ),
  h4: ({ children, ...props }) => (
    <Heading as="h4" size="sm" css={{ fontSize: '$lg', marginTop: '$4', marginBottom: '$1' }} {...props}>
      {children}
    </Heading>
  ),
  p: ({ children, ...props }) => (
    <ContentParagraph {...props}>{children}</ContentParagraph>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.startsWith('language-');
    if (isBlock) {
      return <CodeBlock>{children}</CodeBlock>;
    }
    return <InlineCode>{children}</InlineCode>;
  },
  pre: ({ children }) => <>{children}</>,
  ul: ({ children, ...props }) => <List {...props}>{children}</List>,
  ol: ({ children, ...props }) => <OrderedList {...props}>{children}</OrderedList>,
  blockquote: ({ children, ...props }) => <Blockquote {...props}>{children}</Blockquote>,
  a: ({ children, href, ...props }) => (
    <Link href={href || ''} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  ),
  img: ({ src, alt, ...props }) => (
    <Image src={src || ''} alt={alt || ''} loading="lazy" {...props} />
  ),
  hr: () => <Divider css={{ margin: '$6 0' }} />,
  strong: ({ children, ...props }) => <Strong {...props}>{children}</Strong>,
};
