import axios from 'axios';
import baseURL from './base';

const GroupApi = {
  getGroups: async () => {
    const response = await axios.get(`${baseURL}/groups`);
    return response.data;
  },
  randomlyAllocate: async () => {
    const response = await axios.get(`${baseURL}/groups/auto-grouping`);
    return response.data;
  },
};

export default GroupApi;
