import axios from 'axios';
import host from '../../config';

export const getProfile = async () => {
    const url = `${host}/user`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const singnup = async (data) => {
    const url = `${host}/user/signup`;
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

export const login = async (data) => {
    const url = `${host}/user/signin`;
    try {
        const response = await axios.post(url, { ...data });
        return response;
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
};

export const fetchUser = async (id) => {
    const url = `${host}/user/:${id}`;
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(
            url,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,   
                }
            }
        );
        return response;
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}
