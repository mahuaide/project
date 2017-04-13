
/**
 * Created by Administrator on 2017/4/13.
 */
import * as types from './type'
export default {
  [types.LOGIN]: (state,data) => {
    localStorage.token = data
    state.token = data;
    console.log('login')
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token');
    state.token = null
    console.log('logout')
  },
  [types.ADD]:(state)=>{
    state.counter!=10 && state.counter++;
  },
  [types.REDUCE]:(state)=>{
    state.counter!=0 && state.counter--;
  }
}
