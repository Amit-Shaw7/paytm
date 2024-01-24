import { atom } from "recoil";

const userState = atom({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
    default: {
        firstName: '',
        lastName: '',
        _id: '',
        emiail: '',
    }, // default value (aka initial value)
});

export default userState;