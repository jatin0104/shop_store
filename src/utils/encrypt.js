import CryptoJS from 'crypto-js';

const SECRET_KEY = 'YIzCtbd8cxcj8G0IjjMCjIpU8f8O4pcexABkd1dP9MOUpkk4vvkkiXVyfuaC0fhS'; // Replace with a long, random string

export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (cipherText) => {
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted);
    } catch (err) {
        console.error("Decryption error:", err);
        return null;
    }
};
