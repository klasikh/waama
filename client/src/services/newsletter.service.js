import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.BACKEND_URL + `/newsletter/`;

/* eslint-disable */
class NewsletterService {
  getAll() {
    return axios.get(API_URL + "all",);
  }

  get(id){
    return axios.get(API_URL + `${id}`);
  }

  create(data) {
    return axios.post(API_URL + "create", data, { headers: authHeader() });
  }

  update(id, data){
    return axios.put(API_URL + `update/${id}`, data, { headers: authHeader() });
  }

  delete(id){
    return axios.delete(API_URL + `delete/${id}`, { headers: authHeader() });
  }

  deleteAll(){
    return axios.delete(API_URL + `delete`, { headers: authHeader() });
  }

  findByTitle(title){
    return axios.get(API_URL + `?title=${title}`);
  }
}

export default new NewsletterService();
