import axios from 'axios'
import { GetLocalStorage } from '../localStorage/LocalStorage';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
const instance =  axios.create({
    baseURL:"http://edriveqatar.com/API"
});

instance.interceptors.request.use(
    async (config) => {      
      
      const token = GetLocalStorage('auth');
      if (token?.tokenKey) {
       
        config.headers["Authorization"] = `${token.tokenKey}`;
        
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default instance;