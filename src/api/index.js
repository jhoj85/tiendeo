import axios from 'axios';


export const getCard = async ()=> {
    const URL = `http://localhost:5000/api/cards`;
    const response = await axios.get(URL)
    .then((res) => res.data);

    return response
}

