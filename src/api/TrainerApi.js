import axios from 'axios';
import baseURL from './base';

const TrainerApi = {
  createTrainer: async (trainer) => {
    await axios.post(`${baseURL}/trainers`, trainer);
  },
  getTrainers: async () => {
    const response = await axios.get(`${baseURL}/trainers?grouped=false`);
    return response.data;
  },
  deleteTrainer: async (id) => {
    await axios.delete(`${baseURL}/trainers${id}`);
  },
};

export default TrainerApi;
