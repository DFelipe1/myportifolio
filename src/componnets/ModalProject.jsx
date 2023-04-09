import { GithubLogo, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';

export function ModalProject({data}) {
    return (
        <Dialog.Root>
        <Dialog.Trigger asChild>
        <Button >learn more</Button>
        </Dialog.Trigger>
        <Dialog.Portal className="z-10">
          <Dialog.Overlay className="bg-RaisinBlack/60 backdrop-blur-sm fixed inset-0" />
          <Dialog.Content className=' bg-DarkPurple text-Text data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-8 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
            <div className="overflow-y-auto max-h-[80vh] flex flex-col gap-2 ">
              <div className='w-full'>
                  <img className='object-cover rounded-md' src="https://raw.githubusercontent.com/DFelipe1/RelogioWeb/master/github/assets/RelogioWeb.png" alt='Capa do projeto' />
              </div>
              <div className='flex gap-2'>
                <span className='px-4 py-1 rounded-full bg-PersianPink/60' >
                  <img className='w-4 h-4 object-cover' src="https://cdn.simpleicons.org/html5/191622" alt="" />
                </span>
                <span className='px-4 py-1 rounded-full bg-PersianPink/60' >
                  <img className='w-4 h-4 object-cover' src="https://cdn.simpleicons.org/html5/191622" alt="" />
                </span>
                <span className='px-4 py-1 rounded-full bg-PersianPink/60' >
                  <img className='w-4 h-4 object-cover' src="https://cdn.simpleicons.org/html5/191622" alt="" />
                </span>

              </div>
              <Dialog.Title className='text-xl font-medium'>Study</Dialog.Title>
              <div className='w-[20%] h-1 rounded-full bg-LightGreen'/>
              <Dialog.Description className='text-sm md:text-base px-1'>
                Descubra como estudar de forma assertiva para passar no ENEM.
                Você vai aprender tudo que você precisa para tirar uma boa nota e
                entrar na faculdade desejada.
              </Dialog.Description>

              <div className='w-full'>
                <p className='text-sm md:text-base px-1'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis odit tenetur hic quisquam iste atque laborum, impedit laudantium debitis perspiciatis aliquid tempora aliquam illo expedita. Assumenda tenetur aperiam doloremque!
                </p>
              </div>

              <div className='flex gap-2 mt-2'>
                <Button >
                  <GithubLogo size={24}/>
                  Code
                </Button> 
                <a href="#" className='text-sm p-3 rounded bg-EnglishViolet hover:brightness-90 font-medium'>View Deploy</a>
              </div>

            </div>       
            <Dialog.Close asChild>
              <button 
                className='bg-RaisinBlack/30 hover:bg-RaisinBlack/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] p-1 appearance-none items-center justify-center rounded-full'
                aria-label="Close"
              >
                <X size={18} weight='bold'/>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}