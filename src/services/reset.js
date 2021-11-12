import axios from 'axios';

const baseUrl = '/api/billGates';

const reset = async() => {
    await axios.post(baseUrl);
};

export default { reset };