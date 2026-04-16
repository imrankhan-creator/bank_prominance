import CryptoJS from "crypto-js";

const SECRET_KEY = (import.meta.env.VITE_ENCRYPTION_KEY as string) || "institutional-default-key-32-chars!!";

export const encrypt = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decrypt = (encryptedData: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
