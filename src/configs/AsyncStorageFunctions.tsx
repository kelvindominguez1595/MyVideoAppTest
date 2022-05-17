import AsyncStorage from "@react-native-async-storage/async-storage";

const setDataStorage = async (name: string, data: any) => {
    try{
        await AsyncStorage.setItem(name, JSON.stringify(data));
    } catch(err){
        console.log("Ocurrio un problema al guardar la informacion en local storage");
        return err;
    }
};

const getDataStorage = async (name: string) => {
    try {
        const data = await AsyncStorage.getItem(name);
        if(data !== null) {
            return data;
        } else {
            return '';
        }
    } catch (err) {
        console.log("Ocurrio un error al obtener la informacion de localStorage")
        return "err";
    }
};

const removeDataStorage = async (name: string) => {
    try {
        await AsyncStorage.removeItem(name);
        return null;
    }  catch (err) {  
        return false;
    }
};

export {setDataStorage, getDataStorage, removeDataStorage}