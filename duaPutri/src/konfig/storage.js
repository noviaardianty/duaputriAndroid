import as from '@react-native-async-storage/async-storage';

const USERNAME = "username";

const asSetUsername = (value = "") => {
    return as.setItem(USERNAME, value.toString());
}

const asGetUsername = async () => {
    try {
        const value = await as.getItem(USERNAME);

        if (value) return {
            response: 'success',
            data: value,
        }
        else return {
            response: 'gagal',
            message: "Data empty",
        }
    } catch (e) {
        return {
            message: "Error Storage",
            response: "error",
        }
    }
}

const asEmptyUsername = () => as.removeItem(USERNAME);


export {
    asSetUsername,
    asGetUsername,
    asEmptyUsername,
}