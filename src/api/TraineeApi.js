import axios from 'axios';
import baseURL from './base';

const TraineeApi = {
  createTrainee: async (trainee) => {
    await axios.post(`${baseURL}/trainees`, trainee);
  },
  getTrainees: async () => {
    const response = await axios.get(`${baseURL}/trainees?grouped=false`);
    return response.data;
  },
  deleteTrainee: async (id) => {
    await axios.delete(`${baseURL}/trainees${id}`);
  },
};

export default TraineeApi;
