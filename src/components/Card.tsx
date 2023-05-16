import { useUsersStore } from "../store/UsersStore";

const Card: React.FC = (): JSX.Element => {      
  const { user } = useUsersStore()
  return (
    <div className=" mt-14 w-10/12 md:max-w-lg text-left  mx-auto  ">
        {/* <p>{JSON.stringify(user)}</p> */}
   <div className="flex items-start gap-5">
         <img src={user.avatar_url} alt={user.login} className="w-32 h-32 mb-4 rounded-full border" />
        <div className="pt-4">
          <h2 className="text-2xl font-medium" >{ user.login } </h2>    
          <p className="text-gray-400" >{ user.name }</p>
          <p className="text-gray-400 text-sm">{ user.bio }</p>
        </div>
   </div>
        <p>{ user.location }</p>
        <p>followers:{ user.followers }</p>
        <p>following:{ user.following }</p>
        <p>Repositorios Publicos:{ user.public_repos }</p>
        <p className="truncate" >url:{ user.url }</p>  
    </div>
    
    
  )
};
export default Card;
