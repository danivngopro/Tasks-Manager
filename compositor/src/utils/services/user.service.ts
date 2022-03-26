import axios from "axios";
import { User } from "../../compositor/compositor.interface";

export default class UserService {
  static api = "http://localhost:3001/api/users/";

  static async create(_headers: any, _body: Record<string, any>): Promise<User> {
    return await axios
      .post("http://localhost:3001/api/users/", {
        firstName: "string",
        lastName: "string",
        username: "string",
        email: "string@g.c",
        password: "string",
      })
      .then((res) => res.data)
      .catch(function (error) {
        console.log(error);
      });
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
