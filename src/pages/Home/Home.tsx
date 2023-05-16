import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { useUsersStore } from '../../store/UsersStore';

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const {getUsers } = useUsersStore()
  
  useEffect(() => {
    
    if (search) {
      getUsers(search)
    }
    
  },[search, getUsers])
  
  
  return (
    <main className='h-full w-full pt-5 '>
      <SearchBar setSearch={setSearch} />   
      
      {
        search ?
        <Card />
        : <p className='text-center mt-20' >Busca un Usuario de Github</p>
        
        
      }
      
    </main>
  )
}
export default Home
