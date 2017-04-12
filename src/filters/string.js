/**
 * Created by Administrator on 2017/4/12.
 */
export const lowercase =(str)=>{
  if (!str) return ''
  str = str.toString()
  return str.toLowerCase()
}

export const uppercase =(str)=>{
  if (!str) return ''
  str = str.toString()
  return str.toUpperCase()
}

export const capitalize =(str)=>{
  if (!str) return ''
  str = str.toString()
  return str[0].toUpperCase() + str.slice(1)
}

export const finishText =(str)=>{
  if(str == 1){
    return '未完成';
  }else if(str == 2){
    return '正在进行';
  }else if(str == 3){
    return '完成';
  }
}
