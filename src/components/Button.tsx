interface Props {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <li className='mx-auto md:mx-0 shadow cursor-pointer text-center w-64 text-2xl  transition-all rounded-md hover:bg-[#fe5689]/80 hover:text-white  py-3  px-12 md:px-7  md:text-center md:w-32 md:text-sm md:shadow-none '>
      <a href='#' className=''>
        {children}
      </a>
    </li>
  )
}
export default Button
