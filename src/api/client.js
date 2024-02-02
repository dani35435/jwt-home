import axios, {AxiosHeaders} from "axios";
import {ACCESS_TOKEN} from "@/api/localStorage";
import {REFRESH_TOKEN} from "@/api/localStorage";

let baseUrl = 'http://localhost:8000/api';
let headers = new AxiosHeaders();
headers.setContentType('application/json');
headers.setAccept('application/json');

let accessToken =localStorage.getItem(ACCESS_TOKEN)
let refreshToken =localStorage.getItem(REFRESH_TOKEN)
if (accessToken,refreshToken) {
        headers.setAuthorization(`Bearer ${accessToken}`);
        headers.setAuthorization(`Bearer ${refreshToken}`);
}

const client = axios.create({
    baseURL: baseUrl,
    headers: headers,
    withCredentials: true,
});

export default client;
