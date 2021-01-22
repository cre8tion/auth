import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';

export default function useLogout() {
    let history = useHistory();
    const { setUser } = useContext(UserContext);

    const logoutUser = async () => {
        try {
           await axios({
                method: 'GET',
                url: `auth/logout`,
            }).then(res => { 
                console.log(res);
                setUser(null)
                history.push('/');
            })
        } catch(err) {
            console.log(err);
        } 
    }

    return {
        logoutUser
    }

}