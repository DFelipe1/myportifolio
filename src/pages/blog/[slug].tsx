import { useRouter } from "next/router"
import { BlogPost, BlogPostHeader } from "./styles"
import { Heading } from "@/styles/Heading"
import { Text } from "@/styles/Text"

export default function Blogger(){

    const router = useRouter()
    const { slug } = router.query

    return(
        <BlogPost>
            <BlogPostHeader>
                <Heading>Blog</Heading>
                <Text as={'span'}>2025</Text>
            </BlogPostHeader>

            <div className="content">
                <Text>{slug}</Text>
                <img src="https://www.alura.com.br/artigos/assets/navegacao-next-js-utilizando-rotas-dinamicas/imagem6.png" alt="" />
            </div>
        </BlogPost>
    )
}