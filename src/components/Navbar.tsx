import { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri'
import icono from '../assets/meilisearch.svg'
import Button from './Button'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className=' w-full h-16 bg-white shadow md:flex justify-between md:px-10 items-center  '>
      <div className='flex justify-between p-4 h-16'>
        <img src={icono} alt='icono pagina' />
        {open ? (
          <RiCloseLine
            className='block md:hidden  text-gray-500 text-2xl cursor-pointer '
            onClick={() => setOpen(false)}
          />
        ) : (
          <RiMenu2Line
            className='block md:hidden text-gray-500  text-2xl cursor-pointer '
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      <div className='w-full h-25 md:h-10 md:w-5/12 '>
        <ul
          className={` ${
            open ? 'right-0 ' : '-right-full '
          }transition-all duration-500  fixed  md:relative flex flex-col justify-start pt-52 md:pt-0 items-center border-t-2 border-gray-200/25 w-full h-screen md:h-full shadow text-gray-600 bg-white space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:justify-center text-left md:right-0 md:top-0 md:border-0 md:mx-0 md:shadow-none `}
        >
          <Button>Perfil</Button>
          <Button>Favoritos</Button>
          <Button>Contactos</Button>
          <Button>Recientes</Button>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
