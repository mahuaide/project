export default {
  install(Vue){
    Vue.prototype.$time = {
      strToDate: function(dateStr, formatStr) {
        //YYYY是年
        //MM是“01”月的格式
        //DD是“01”日的格式
        //HH是小时、MN是分、SS是秒
        var digit = 0; //退位计数器
        var date = new Date();
        var newFormat = formatStr.toUpperCase();
        var year = getNumFromStr(dateStr, newFormat, 'YYYY');
        var month = getNumFromStr(dateStr, newFormat, 'MM');
        var da = getNumFromStr(dateStr, newFormat, 'DD');
        var hour = getNumFromStr(dateStr, newFormat, 'HH');
        var mn = getNumFromStr(dateStr, newFormat, 'MN');
        var ss = getNumFromStr(dateStr, newFormat, 'SS');
        if (year > 0)
          date.setFullYear(year);
        if (month > 0)
          date.setMonth(month - 1);
        if (da > 0)
          date.setDate(da);
        if (hour > 0)
          date.setHours(hour);
        if (mn > 0)
          date.setMinutes(mn);
        if (ss > 0)
          date.setSeconds(ss);
        return date;

        function getNumFromStr(target, frm, s) {
          //target是目标字符串，frm是模板字符串，s是匹配字符
          var len = s.length;
          var index = frm.indexOf(s);
          if (index < 0)
            return index;
          var reStr = target.substr(index - digit, len);
          var result = parseInt(reStr, 10); //(s=='SM'||s=='SD')&&
          if (result < 10 && (reStr.charAt(0) != 0)) {
            digit++;
          }
          return result;
        }
      },
      dateToStr: function(date, formatStr) {
        var str = formatStr;
        str = str.replace(/yyyy|YYYY/, date.getFullYear());
        str = str
          .replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date
            .getYear() % 100).toString() : "0" + (date.getYear() % 100));
        str = str.replace(/MM/, date.getMonth() > 8 ? (date.getMonth() + 1)
          .toString() : "0" + (date.getMonth() + 1));
        str = str.replace(/M/g, date.getMonth() + 1);
        str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate()
          .toString() : "0" + date.getDate());
        str = str.replace(/d|D/g, date.getDate());
        str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours()
          .toString() : "0" + date.getHours());
        str = str.replace(/h|H/g, date.getHours());
        str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes()
          .toString() : "0" + date.getMinutes());
        str = str.replace(/m/g, date.getMinutes());
        str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date
          .getSeconds().toString() : "0" + date.getSeconds());
        str = str.replace(/s|S/g, date.getSeconds());
        return str;
      },
      getMonthLastDay: function(timeStr, formatStr) {
        var date = this.strToDate(timeStr, formatStr);
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        var day = date.getDate() + '';
        return day.length < 2 ? ('0' + day) : day;
      },
      calcTime: function(secondTime,isCourseTime){
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
      },
      calcTime_MS: function(millisecond){
        return {
          min:Math.floor(parseInt(millisecond)/1000/60),
          sec:(parseInt(millisecond)-Math.floor(parseInt(millisecond)/1000/60)*60*1000)/1000
        };
      }
    }
  }
}
