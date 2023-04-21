import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center w-full py-11">
        <Logo/>

        <nav className="flex gap-2 lg:gap-3">
          <a tabIndex={1} href="#home" className="text-sm lg:text-lg xl:text-xl  hover:text-PersianPink after:content-['/'] after:text-RaisinBlack hover:after:text-PersianPink before:content-['/'] before:text-RaisinBlack hover:before:text-PersianPink transition-all duration-300 afrter:transition-all afrter:duration-300 before:transition-all before:duration-300">
            Inicio
          </a>
          <a tabIndex={1} href="#about" className="text-sm lg:text-lg xl:text-xl  hover:text-PersianPink after:content-['/'] after:text-RaisinBlack hover:after:text-PersianPink before:content-['/'] before:text-RaisinBlack hover:before:text-PersianPink transition-all duration-300 afrter:transition-all afrter:duration-300 before:transition-all before:duration-300">
            Sobre
          </a>
          <a tabIndex={1} href="#projects" className="text-sm lg:text-lg xl:text-xl  hover:text-PersianPink after:content-['/'] after:text-RaisinBlack hover:after:text-PersianPink before:content-['/'] before:text-RaisinBlack hover:before:text-PersianPink transition-all duration-300 afrter:transition-all afrter:duration-300 before:transition-all before:duration-300">
            Projetos
          </a>
          <a tabIndex={1} href="#contact" className="text-sm lg:text-lg xl:text-xl  hover:text-PersianPink after:content-['/'] after:text-RaisinBlack hover:after:text-PersianPink before:content-['/'] before:text-RaisinBlack hover:before:text-PersianPink transition-all duration-300 afrter:transition-all afrter:duration-300 before:transition-all before:duration-300">
            Contato
          </a>

        </nav>
      </header>
    )
}