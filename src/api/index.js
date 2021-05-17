import axios from 'axios';


export const getCard = async ()=> {
    const URL = `http://localhost:5000/api/cards`;
    const response = await axios.get(URL)
    .then((res) => res.data);

    return response
}


// GET OSH Countries for the Selectors
export function getOSHCountries(dataPage, countries) {
    const URL = ``;

    const response = axios.get(URL, {
        params: {
            page: dataPage,
            country: countries
        },
        paramsSerializer: params => {
            let urlWithParams = new URLSearchParams()
            if(params.page) {  urlWithParams.append('page', params.page);      }
            return urlWithParams
        }
    })
    .then((res) => res.data);

    return response
}
///////////////////////////////////////////////
export function getSocialDialogueCountries() {
    const URL = ``;

    const response = axios.get(URL)
    .then((res) => res.data);

    return response
}