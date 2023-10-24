import { useQuery } from 'urql';

import { Blob } from "./Blob";
import { Button } from "./Button";
import { Project } from "./Project";

import ToTheStars from '../assets/To-the-stars-amico.svg'
import StartingABusinessProject from '../assets/Starting-a-business-project-rafiki.svg'
import { RocketLaunch } from '@phosphor-icons/react';
import { Projects } from '../graphql/queries/project';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Loading } from './Loading';
import { Techs } from './Techs';


export function Main() {

    const [result, reexecuteQuery] = useQuery({
        query: Projects,
    });
    
    const { data, fetching, error } = result;

      
    if(fetching) {
        return (
            <Loading/>
        )
    }
    const projects = data.work.projects

    AOS.init();
        
    return(
        <main className='w-full flex flex-col gap-36 my-24'>
            <section id="home" className="w-full flex flex-col-reverse gap-4 lg:flex-row justify-between items-center">
            <div className="max-w-[500px] flex-1 font-bold ">
                    <h1 
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="linear"
                        className='text-center mx-auto lg:text-left lg:mx-0 text-3xl md:text-5xl tracking-tight leading-tight'
                    >
                        Olá Mundo!, Sou David Felipe
                        <br />                  
                    </h1>
                    <span 
                        data-aos="fade-up" 
                        data-aos-easing="linear"
                        data-aos-delay="1000"

                        className="text-LightGreen text-xl md:text-4xl my-1"
                    > 
                        Desenvolvedor Front-end
                    </span>
                    
            </div>
            <div data-aos="fade-right" className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] '>
                <Blob />
            </div>
            </section>

            <section id="about" className="w-full flex flex-col md:flex-row gap-9 items-center">
            <div data-aos="fade-up" className="w-[300px] lg:w-[500px]">
                <img src={ToTheStars} alt="" className='object-cover'/>
            </div>
            <div className='flex-1 flex flex-col gap-4'>
                <h2 data-aos="fade-right" className='text-2xl lg:text-5xl font-bold'>Sobre Mim</h2>
                <p data-aos="fade-right" className='text-lg font-regular'>
                    Ei! Meu nome é david felipe, sou desenvolvedor web React.
                    Apaixonado por desenvolver e resolver problemas de forma criativa e prática.
                    Adoro imaginar criativamente as infinitas coisas que posso fazer com a programação, sinto
                    como um astronauta explorando o universo.
                    <br/>
                <span data-aos="fade-right" className='text-LightGreen text-base'>
                    Ei? Vamos criar algo juntos?
                </span>
                </p>
                <Button data-aos="fade-right" asChild>
                    <a href="#contact">Sim! vamos!</a>
                </Button>
            </div>
            </section>

            <section className="flex overflow-hidden">
                <div data-aos="fade-up" className="min-w-full flex flex-wrap gap-6 justify-center md:justify-evenly">
                    <Techs tech={'html5'}/>
                    <Techs tech={'css3'}/>
                    <Techs tech={'javascript'}/>
                    <Techs tech={'react'}/>
                    <Techs tech={'tailwindcss'}/>
                    <Techs tech={'figma'}/>
                    <Techs tech={'nodedotjs'}/>
                </div>
            </section>

            <section id='projects'>
            <h2 data-aos="fade-up" className='text-2xl lg:text-5xl font-bold'>Projetos</h2>
            <div data-aos="fade-right" className='max-w-full flex flex-col flex-wrap-reverse md:flex-row justify-between mt-6 gap-7'>

                {projects.map((project, i) => {
                    return (
                        <Project key={i} project={project}/>
                    )
                })}
                
                
            </div>
            </section>

            <section id="contact" className="w-full flex flex-col md:flex-row justify-between items-center">
            <img data-aos="fade-up" className="w-[300px] lg:w-[500px]" src={StartingABusinessProject} alt="Menino construindo foguete" />
            <div className='flex-1 flex flex-col gap-5'>
                <h3 data-aos="fade-right" className="text-2xl lg:text-5xl font-bold">Contact</h3>
                <form action="https://formsubmit.co/342162fae03d3261bd57107cc46257d6 " method="POST" className='flex flex-col gap-4'>
                <input type="hidden" name="_next" value="https://www.davidfelipe.dev"/>
                <input type="hidden" name="_autoresponse" value="Opa! recebi sua mensagem, logo te enviarei uma resposta." />
                <div className='flex flex-col gap-2'>
                    <label data-aos="fade-right" htmlFor="email" className="text-base md:text-xl font-medium">Email:</label>
                    <input 
                        data-aos="fade-right"
                        id="email" 
                        type="email"
                        name='email'
                        required 
                        placeholder="Digite deu email" 
                        className="w-full p-2 rounded text-base md:text-lg placeholder:text-EnglishViolet bg-DarkPurple outline-none focus:border focus:border-PersianPink focus:bg-EnglishViolet"  
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label data-aos="fade-right" htmlFor="subject" className="text-base md:text-xl font-medium">Assunto:</label>
                    <input 
                        data-aos="fade-right"
                        id="subject" 
                        type="text" 
                        name="_subject"
                        required
                        placeholder="vamos falar sobre o que?" 
                        className="w-full p-2 rounded text-base md:text-lg placeholder:text-EnglishViolet bg-DarkPurple outline-none focus:border focus:border-PersianPink focus:bg-EnglishViolet"   
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label data-aos="fade-right" htmlFor="description" className="text-base md:text-xl font-medium">Descrição:</label>
                    <textarea 
                        data-aos="fade-right"
                        name="description" 
                        id="description" 
                        cols="30" 
                        rows="8"
                        required
                        placeholder="digite o que você quer dizer aqui" 
                        className="w-full p-2 resize-none rounded text-base md:text-lg placeholder:text-EnglishViolet bg-DarkPurple outline-none focus:border focus:border-PersianPink focus:bg-EnglishViolet" 
                    ></textarea>
                </div>

                <Button data-aos="fade-right" type="submit">
                    Submit
                </Button>
                </form>
            </div>
            </section>

        </main>
    )
}