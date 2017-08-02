
/**
 * Created by Administrator on 2017/4/13.
 */
import * as types from './type'
import {lsWrite,lsRead} from '../common/js/ls'
export default {
  [types.LOGIN]: (state,data) => {
    lsWrite('token',data)
    state.token = data;
  },
  [types.LOGOUT]: (state) => {
    state.token = null
    lsWrite('token',null);
  },
  [types.ADD]:(state)=>{
    state.counter!=10 && state.counter++;
  },
  [types.REDUCE]:(state)=>{
    state.counter!=0 && state.counter--;
  }
}
