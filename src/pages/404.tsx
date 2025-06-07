import { Box } from "@/components/Box";
import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import Link from "next/link";

export default function NotFound() {
    return (
        <Box css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$4',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            textAlign: 'center',
            padding: '20px',

            a: {
                padding: '$1 $2',
                color: '$AlbescentWhite100',
                backgroundColor: '$CodGray700',
                borderRadius: '$md',
            }
        }}>
            <Heading as={'h1'} size={'sm'} css={{ 
                '@md':{
                    fontSize: '$5xl'
                }
            }}>
                404 - Opss... cadê a pagina?
            </Heading>
            <Text size={'sm'} css={{
                lineHeight: '$short',
                '@md': {
                    fontSize: '$md',
                    lineHeight: '$base',
                }
            }}>
                Desculpa, mas não encontramos essa pagina
            </Text>
            <Link 
             href="/">
                voltar para o ínicio
            </Link>
        </Box>
    )
}