/**
 * Created by Administrator on 2017/8/2.
 */
export function lsWrite(key, value) {
  let qmc = window.localStorage.__ai_qmc__;
  if (!qmc) {
    qmc = {};
  } else {
    qmc = JSON.parse(qmc);
  }
  qmc[key] = value;
  window.localStorage.__ai_qmc__ = JSON.stringify(qmc);
};

export function lsRead(key) {
  let qmc = window.localStorage.__ai_qmc__;
  if (!qmc) {
    return "";
  }
  qmc = JSON.parse(qmc);
  if (!qmc) {
    return "";
  }
  let ret = qmc[key];
  return ret || "";
};
