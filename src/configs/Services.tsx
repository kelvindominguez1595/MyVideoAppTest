import axios from "axios";
import { LOGIN_API } from "./urls";

export const apiLogin = axios.create({baseURL: LOGIN_API});