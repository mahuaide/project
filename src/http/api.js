/**
 * Created by Administrator on 2017/3/21.
 */
import axios from './http.js';
import qs from 'qs'
import Path from './path'

export const login = params => {
  return axios.post(Path.login, qs.stringify(params));
};

export const logout = function(){return axios.get(Path.logout)}

export const getLoginUser = function() {return axios.get(Path.getLoginUser)};
export const getWorkflowState = function() {return axios.get(Path.getWorkflowState)};

// export const queryPreCodePage = params => {return axios.get(`${base}/data/queryPreCodePageInit.action`, {params: params})};
//
// export const queryPreCodeDetails = params => {return axios.get(`${base}/data/queryPreCodeDetails.action`, {params: params})};
//
// export const queryDisBussinessCode = params => {return axios.get(`${base}/data/queryDisBussinessCode.action`, {params: params})};
