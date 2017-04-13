/**
 * Created by Administrator on 2017/4/13.
 */
import * as types from './type'

export default{
  [types.LOGIN]:({commit},data)=>{
    commit(types.LOGIN,data);
  },
  [types.LOGOUT]:({commit})=>{
    commit(types.LOGOUT)
  },
  [types.ADD]:({commit})=>{
    commit(types.ADD)
  },
  [types.REDUCE]:({commit})=>{
    commit(types.REDUCE)
  }
}
