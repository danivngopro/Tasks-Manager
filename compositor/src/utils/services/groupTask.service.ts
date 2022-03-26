import axios from 'axios';
import { GroupTask } from '../../compositor/compositor.interface';


export default class GroupTaskService {
  static api = 'http://grouptask-service:3004/api/users';

  static async create(headers: any, body: Record<string, any>): Promise<GroupTask> {
    return axios.post(`${GroupTaskService.api}`, body, headers).then(res => res.data);
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
