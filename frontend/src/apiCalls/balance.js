import axios from "axios";
import host, { UI_HOST } from "../../config"

export const getBalance = async () => {
    const url = `${host}/account/balance`;
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(
            url,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
        );
        if (response.status !== 200) {
            console.log("Redirected");
            window.location.href = `${UI_HOST}/signin`;
        }
        return response.data.balance;
    } catch (error) {
        console.log(error);
        console.log("Redirected");
        window.location.href = `${UI_HOST}/signin`;
    }
}