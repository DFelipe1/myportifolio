import { useQuery } from 'urql';


import { Blob } from "./Blob";
import { Button } from "./Button";
import { Project } from "./Project";

import ToTheStars from '../assets/To-the-stars-amico.svg'
import StartingABusinessProject from '../assets/Starting-a-business-project-rafiki.svg'
import { RocketLaunch } from '@phosphor-icons/react';
import { Projects } from '../graphql/queries/project';


export function Main() {

    const [result, reexecuteQuery] = useQuery({
        query: Projects,
    });
    
    const { data, fetching, error } = result;
      
    if(fetching) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <RocketLaunch size={64} weight='fill' className='text-LightGreen animate-loading'/>
            </div>
        )
    }
    const projects = data.work.projects
        
    return(
        <main className='w-full flex flex-col gap-36 my-24'>
            <section id="home" className="w-full flex flex-col-reverse gap-4 lg:flex-row justify-between items-center">
            <div className="flex-1 font-bold ">
                <h1 className='text-5xl'>Olá Mundo!</h1>
                <p className='text-4xl my-1'>
                    Eu Sou Desenvolvedro Front-end
                <br />
                <span className="text-LightGreen">Javascript</span>
                </p>
            </div>
            <div className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] '>
                <Blob />
            </div>
            </section>

            <section id="about" className="w-full flex flex-col md:flex-row gap-9 items-center">
            <div className="w-[300px] lg:w-[500px]">
                <img src={ToTheStars} alt="" className='object-cover'/>
            </div>
            <div className='flex-1 flex flex-col gap-4'>
                <h2 className='text-2xl lg:text-5xl font-bold'>Sobre Mim</h2>
                <p className='text-base font-regular'>
                    Ei! Meu nome é david felipe, sou desenvolvedor web React.
                    Apaixonado por desenvolver e resolver problemas de forma criativa e prática.
                    Adoro imaginar criativamente as infinitas coisas que posso fazer com a programação, sinto
                    como um astronauta explorando o universo.
                <span className='text-LightGreen text-base'>
                    Ei? Vamos criar algo juntos?
                </span>
                </p>
                <Button asChild>
                <a href="#contact">Sim! vamos!</a>
                </Button>
            </div>
            </section>

            <section className="flex overflow-hidden">
            <div className="min-w-full flex flex-wrap gap-6 justify-center md:justify-evenly">
                <div className="w-8 h-8 ">
                <img className='object-cover' src="https://cdn.simpleicons.org/html5/FF79C6" alt="" />
                </div>
                <div className="w-8 h-8">
                <img className='object-cover' src="https://cdn.simpleicons.org/css3/FF79C6" alt="" />
                </div>
                <div className="w-8 h-8">
                <img className='object-cover' src="https://cdn.simpleicons.org/javascript/FF79C6" alt="" />
                </div>
                <div className="w-8 h-8">
                <img className='object-cover' src="https://cdn.simpleicons.org/react/FF79C6" alt="" />
                </div>
                <div className="w-8 h-8">
                <img className='object-cover' src="https://cdn.simpleicons.org/tailwindcss/FF79C6" alt="" />
                </div>
                <div className="w-8 h-8">
                <img className='object-cover' src="https://cdn.simpleicons.org/figma/FF79C6" alt="" />
                </div>
                <div className="w-8 h-8">
                <img className='object-cover' src="https://cdn.simpleicons.org/nodedotjs/FF79C6" alt="" />
                </div>
            </div>
            
            </section>

            <section id='projects'>
            <h2 className='text-2xl lg:text-5xl font-bold'>Projetos</h2>
            <div className='max-w-full flex flex-col flex-wrap-reverse md:flex-row justify-between mt-6 gap-7'>

                {projects.map((project, i) => {
                    return (
                        <Project key={i} project={project}/>
                    )
                })}
                
                
            </div>
            </section>

            <section id="contact" className="w-full flex flex-col md:flex-row justify-between items-center">
            <img className="w-[300px] lg:w-[500px]" src={StartingABusinessProject} alt="Menino construindo foguete" />
            <div className='flex-1 flex flex-col gap-5'>
                <h3 className="text-2xl lg:text-5xl font-bold">Contact</h3>
                <form action="https://formsubmit.co/342162fae03d3261bd57107cc46257d6 " method="POST" className='flex flex-col gap-4'>
                <input type="hidden" name="_autoresponse" value="Opa! recebi sua mensagem, logo te enviarei uma resposta." />
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className="text-base md:text-xl font-medium">Email:</label>
                    <input 
                    id="email" 
                    type="email"
                    name='email'
                    required 
                    placeholder="Digite deu email" 
                    className="w-full p-2 rounded text-base md:text-lg placeholder:text-EnglishViolet bg-DarkPurple outline-none focus:border focus:border-PersianPink focus:bg-EnglishViolet"  
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="subject" className="text-base md:text-xl font-medium">Assunto:</label>
                    <input 
                    id="subject" 
                    type="text" 
                    name="_subject"
                    required
                    placeholder="vamos falar sobre o que?" 
                    className="w-full p-2 rounded text-base md:text-lg placeholder:text-EnglishViolet bg-DarkPurple outline-none focus:border focus:border-PersianPink focus:bg-EnglishViolet"   
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="description" className="text-base md:text-xl font-medium">Descrição:</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    cols="30" 
                    rows="8"
                    required
                    placeholder="digite o que você quer dizer aqui" 
                    className="w-full p-2 resize-none rounded text-base md:text-lg placeholder:text-EnglishViolet bg-DarkPurple outline-none focus:border focus:border-PersianPink focus:bg-EnglishViolet" 
                    ></textarea>
                </div>

                <Button type="submit">
                    Submit
                </Button>
                </form>
            </div>
            </section>

        </main>
    )
}