import axios from "axios";
import { User } from "../../compositor/compositor.interface";

export default class UserService {
  static api = "http://users-crud:3001/api/users/";

  static async create(headers: any, body: Record<string, any>): Promise<User> {
    return axios.post(`${UserService.api}`, body, headers).then(res => res.data);
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
