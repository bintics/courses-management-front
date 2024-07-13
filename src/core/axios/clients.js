import axios from 'axios';

export const getClients = async() => {
  try {
    const resp = await axios.get('/clients');
    return resp.data;
  } catch(error) {
    throw error;
  }
};