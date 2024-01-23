import axios from 'axios';
import host from '../../config';

export const getProfile = async () => {
    const url = `${host}/user`;
    try{
        const response = await axios.get(url);
        return response;
    }catch(error){
        console.log(error);
    }
};
