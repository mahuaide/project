/**
 * Created by Administrator on 2017/4/12.
 */
import moment from 'moment';
moment.lang('zh-cn');

export const timeFormate=(time,reg)=>{
  var date= new Date(time);
  return moment(date).format(reg);
}
