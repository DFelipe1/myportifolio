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
            <Heading as={'h1'} className="text-4xl font-bold">404 - Opss... cadê a pagina?</Heading>
            <Text className="mt-4 text-lg">Desculpa, mas não encontramos essa pagina</Text>
            <Link 
             href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                voltar para o ínicio
            </Link>
        </Box>
    )
}