import { RiSearch2Line } from "react-icons/ri";

interface SearchBarProps {
  setSearch: (search: string) => void
}

const SearchBar : React.FunctionComponent<SearchBarProps> = ({setSearch}) => {
  const handleSubmit = ( event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const search = form.search.value
    setSearch(search)
    form.reset()   
  }

  return (
    <form className=' flex flex-col items-center' onSubmit={handleSubmit} >
      <div className="flex items-center w-10/12 md:w-4/12 bg-white py-2 px-3  rounded-md outline-none focus:shadow  border">    
        <RiSearch2Line className="text-gray-500 font-medium text-xl cursor-pointer" />
        <input
          type='text'
          placeholder='LostoVayne'
          className=' w-full placeholder:text-gray-300 pl-2 outline-none'
          name="search"
        />      
      </div>
    </form>
  )
}
export default SearchBar
