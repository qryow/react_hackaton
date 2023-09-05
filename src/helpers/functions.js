import axios from 'axios';
import { ACCOUNT_API } from './consts';
import '../components/Profile/Profile.module.css'

//* registration

export const addDataToLocalStorage = (user, tokens) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('tokens', JSON.stringify(tokens));
}

export const updateToken = () => {
  let updateFunc = setInterval(async () => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if(!tokens) return clearInterval(updateFunc);
    const Authorization =`Bearer ${tokens.access}`;
    let res = await axios.post(`${ACCOUNT_API}/api/token/refresh/`, { refresh: tokens.refresh }, { headers: { Authorization }});
    localStorage.setItem('tokens', JSON.stringify({ refresh: tokens.refresh, access: res.data.access }));
  }, 1000 * 60 * 9);
};


//* sidebar

