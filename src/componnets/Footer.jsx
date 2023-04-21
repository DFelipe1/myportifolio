import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { Logo } from './Logo'

export function Footer() {
    return(
        <footer className='w-full flex flex-col items-center gap-4'>
          <div className='w-full flex justify-between items-center'>
            <Logo/>
            <ul className='list-none flex gap-2 text-LightGreen'>
              <a href="https://www.linkedin.com/in/lipedev/" className='text-lg lg:text-2xl hover:scale-110 hover:-translate-y-1 '>
                <LinkedinLogo  weight='fill'/>
              </a>
              <a href="https://github.com/DFelipe1" className='text-lg lg:text-2xl hover:scale-110 hover:-translate-y-1'>
                <GithubLogo weight='fill'/>
              </a>
              <a href="https://www.instagram.com/feeh7k/" className='text-lg lg:text-2xl hover:scale-110 hover:-translate-y-1'>
                <InstagramLogo weight='fill'/>
              </a>
            </ul>
          </div>
          <span className='text-sm lg:text-lg'>© 2023 by David Felipe.</span>
        </footer>
    )
}