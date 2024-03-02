import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.BACKEND_URL + `/actuality/`;

/* eslint-disable */
class ActualityService {
  getAll() {
    return axios.get(API_URL + "all",);
  }

  get(id){
    return axios.get(API_URL + `${id}`);
  }

  create(data) {
    console.log(API_URL)
    return axios.post(API_URL + "create", data, { headers: authHeader() });
  }

  update(id){
    return axios.put(API_URL + `update/${id}`, data, data, { headers: authHeader() });
  }

  delete(id){
    return axios.delete(API_URL + `delete/${id}`, data, { headers: authHeader() });
  }

  deleteAll(){
    return axios.delete(API_URL + `delete`, data, { headers: authHeader() });
  }

  findByTitle(title){
    return axios.get(API_URL + `?title=${title}`);
  }
}

export default new ActualityService();
