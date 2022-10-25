import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            "X-RapidAPI-Key":
                "fc5d245e92mshfc1326c191d7fc9p12c645jsnb76c18079fc2",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
    });
    return data;
};
