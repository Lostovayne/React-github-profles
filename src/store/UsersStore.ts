import { User } from './../interfaces/User';
import { create } from "zustand" 

interface Users {  
    user : User,
    getUsers : (userProfile : string) => void
}

export const useUsersStore = create<Users>(set=> ({    
    user:{
        login: '',
        id: 0,
        node_id: '',
        avatar_url: '',
        gravatar_id: '',
        url: '',
        html_url: '',
        followers_url: '',
        following_url: '',
        gists_url: '',
        starred_url: '',
        subscriptions_url: '',
        organizations_url: '',
        repos_url: '',
        events_url: '',
        received_events_url: '',
        type: '',
        site_admin: false,
        name: '',
        company: '',
        blog: '',
        location: '',
        email: '',
        hireable: '',
        bio: '',
        twitter_username: '',
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: '',
        updated_at: ''
    },
    getUsers: async (userProfile) => {   
        const user = await ( await fetch(`https://api.github.com/users/${userProfile}`)).json() 
        set( state => ({ ...state,user  }))
    }
})) 
