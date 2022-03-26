import axios from 'axios';
import { Task } from '../../compositor/compositor.interface';


export default class TaskService {
  static api = 'localhost:3001/api/users';

  static create(headers: any, body: Record<string, any>): Promise<Task> {
    return axios.post(`${TaskService.api}`, headers, body);
  }

  //   static createById(headers: any, id: string): Promise<User> {
  //     return axios.post(`${UserService.api}/${id}`, headers, {});
  //   }

  //   static getById(headers: any, id: string): Promise<User> {
  //     return axios.get(`${UserService.api}/${id}`, headers);
  //   }

  //   static getMany(headers: any, query: Record<string, any>): Promise<User[]> {
  //     return axios.get(UserService.api, headers, query);
  //   }

//   static put(headers: any, id: string, body: any): Promise<User> {
//     return axios.put(`${UserService.api}/${id}`, headers, body);
//   }
}
