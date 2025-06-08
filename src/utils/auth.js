import { decryptData } from './encrypt';

export const getUser = () => {
    const encrypted = localStorage.getItem('user');
    if (!encrypted) return null;

    const user = decryptData(encrypted);
    const now = new Date().getTime();

    if (!user || now > user.expiryTime) {
        localStorage.removeItem('user');
        return null;
    }

    return user;
};

export const isLoggedIn = () => !!getUser();
