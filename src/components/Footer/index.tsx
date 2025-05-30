import Link from "next/link";
import { FooterContainer } from "./styles";

export function Footer() {

    const socials = [
        {
            name: 'email',
            url: 'mailto:felipe30.10@outlook.com'
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/feeh.dev/'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/lipedev/'
        },
        {
            name: 'behance',
            url: 'https://www.behance.net/feeh7k'
        },
        {
            name: 'github',
            url: 'https://github.com/DFelipe1/'
        }
    ]

    return (
        <FooterContainer>
                {socials.map((social, index) => (
                    <Link key={index} href={social.url}>
                        {social.name}
                    </Link>
                ))}
            </FooterContainer>
    )
}