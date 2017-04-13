/**
 * Created by Administrator on 2017/4/12.
 */
import moment from 'moment';
moment.lang('zh-cn');

export const timeFormate=(time,reg)=>{
  var date= new Date(time);
  return moment(date).format(reg);
}

export const calcTime=(secondTime,isCourseTime)=>{
  secondTime = parseInt(secondTime);
  var hour ,minutes;
  if(isCourseTime){
    hour = (secondTime/3600)<1?"":Math.floor(secondTime/3600);
    minutes = (secondTime-hour*3600)/60 <1?"0":(secondTime-hour*3600)/60<10?""+Math.floor((secondTime-hour*3600)/60):Math.floor((secondTime-hour*3600)/60);
  }else{
    hour = (secondTime/3600)<1?"":Math.floor(secondTime/3600);
    minutes = (secondTime-hour*3600)/60 <1?"00":(secondTime-hour*3600)/60<10?"0"+Math.floor((secondTime-hour*3600)/60):Math.floor((secondTime-hour*3600)/60);
  }
  var second = secondTime%60==0?"00":secondTime%60<10?"0"+secondTime%60:secondTime%60;
  if(isCourseTime){
    return ((hour == "" ? "0": hour) + "小时") + minutes + "分";
  }else{
    return (hour == "" ? "": hour + ":") + minutes + ":" + second;
  }
}
