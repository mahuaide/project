/**
 * Created by Administrator on 2017/3/21.
 */
import axios from 'axios';
import qs from 'qs'
import Path from './path'

export const login = params => {
  return axios.post(Path.login, qs.stringify(params));
};

export const getLoginUser = function() {return axios.get(Path.getLoginUser)};

// export const queryPreCodePage = params => {return axios.get(`${base}/data/queryPreCodePageInit.action`, {params: params})};
//
// export const queryPreCodeDetails = params => {return axios.get(`${base}/data/queryPreCodeDetails.action`, {params: params})};
//
// export const queryDisBussinessCode = params => {return axios.get(`${base}/data/queryDisBussinessCode.action`, {params: params})};
