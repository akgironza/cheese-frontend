import {baseUrl} from "./baseURL";

export const cheesesLoader = async () => {
    const response = await fetch(`${baseUrl}/cheese`)
    const cheeses = await response.json()
    return cheeses
};

