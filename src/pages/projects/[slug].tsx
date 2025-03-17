import { Heading } from "@/styles/Heading"
import { PostContainer, PostHeader } from "@/styles/Post"
import { Text } from "@/styles/Text"
import { useRouter } from "next/router"

export default function Project() {

    const router = useRouter()
    const { slug } = router.query
    return (
        <PostContainer>
            <PostHeader>
                <Heading>Name project</Heading>
                <Text as={'span'}>2025</Text>
            </PostHeader>

            <div className="content">
                <Text>{slug}</Text>
                <img src="https://www.alura.com.br/artigos/assets/navegacao-next-js-utilizando-rotas-dinamicas/imagem6.png" alt="" />
            </div>
        </PostContainer>
    )
}