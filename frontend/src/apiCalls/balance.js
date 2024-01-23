import axios from "axios";
import host from "../../config"

export const getBalance = async () => {
    const url = `${host}/account/balance`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
}