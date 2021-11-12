import axios from 'axios';
import storage from '../utils/storage';

const baseUrl = '/api/votes';

const getConfig = () => {
    return {
        headers: { Authorization: `bearer ${storage.loadUser().token}` }
    };
};

const getAll = async() => {
    const res = await axios.get(baseUrl);
    return res.data;
};

const create = async(vote) => {
    const res = await axios.post(baseUrl, vote, getConfig());
    return res.data;
};

export default { getAll, create };