import { ModalProject } from "./ModalProject";

export function Project() {
    return (
        <div className='min-w-[300px] flex-1 p-2 rounded-lg flex flex-col gap-2 hover:scale-105 transition duration-150'>
              <div className='w-full'>
                <img className='object-cover rounded-md' src="https://raw.githubusercontent.com/DFelipe1/RelogioWeb/master/github/assets/RelogioWeb.png" alt="" />
              </div>
              <div className='flex flex-col gap-3 mt-2'>
                <strong className='text-xl font-medium'>Projeto Study</strong>
                <span className='flex gap-2'> 
                  <div className='px-4 py-1 rounded-full bg-PersianPink/60'>
                    <img className='w-4 h-4 object-cover' src="https://cdn.simpleicons.org/html5/191622" alt="" />
                  </div>

                  <div className='px-4 py-1 rounded-full bg-PersianPink/60'>
                    <img className='w-4 h-4 object-cover' src="https://cdn.simpleicons.org/css3/191622" alt="" />
                  </div>

                  <div className='px-4 py-1 rounded-full bg-PersianPink/60'>
                    <img className='w-4 h-4 object-cover' src="https://cdn.simpleicons.org/javascript/191622" alt="" />
                  </div>

                </span>
                <p className='text-base'>
                  Descubra como estudar de forma assertiva para passar no ENEM.
                  Você vai aprender tudo que você precisa para tirar uma boa nota e
                  entrar na faculdade desejada.
                </p>
              </div>
              <div className='flex gap-2 mt-2'>
                <ModalProject/>
                <a href="#" className='text-base p-3 rounded bg-DarkPurple hover:brightness-90 font-medium'>View Deploy</a>
              </div>
            </div>
    )
}