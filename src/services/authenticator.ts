import axios, { AxiosResponse } from 'axios';
import config from '../config';

interface IAuthenticator {
  fetchLoggedIn(token: string): Promise<Response>;
  loggedIn(): Promise<AxiosResponse>;
  login(username: string, password: string): Promise<AxiosResponse>;
  register(username: string, password: string): Promise<AxiosResponse>;
}

const BASE_URL = config.AUTH_URL

export class Authenticator implements IAuthenticator {
  register(username: string, password: string): Promise<AxiosResponse> {
    const formattedUrl = BASE_URL.concat('/player/register');

    return axios.post(formattedUrl, {name: username, password: password}, {withCredentials: true});
  }

  login(username: string, password: string): Promise<AxiosResponse> {
    const formattedUrl = BASE_URL.concat('/player/login');

    return axios.post(formattedUrl, {name: username, password: password}, {withCredentials: true});
  }

  loggedIn(): Promise<AxiosResponse> {
    const formattedUrl = BASE_URL.concat('/player/loggedin');

    return axios.get(formattedUrl, {withCredentials: true});
  }

  fetchLoggedIn(token: string | undefined): Promise<Response> {
    const formattedUrl = BASE_URL.concat('/player/loggedin');
    
    return fetch(formattedUrl, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Authorization': 'Bearer '+token,
      }
    });
  }
}
