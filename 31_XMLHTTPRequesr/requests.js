import {base_url, requestOptions} from "../config/constants";

export async function executeQuery (strQuery) {
    try {
        let data = await fetch(`${base_url}${strQuery}`, requestOptions);
        let result = await data.json();

        if (result.ok||result.success)
            return result;
        else
            throw new Error('Ошибка запроса: ' + result.message);

    } catch (error) {
        return  {ok : false, errorStr: error.message};
    }
}