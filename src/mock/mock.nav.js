import Path from '../http/path'
import http from '../http/http'
const baseUrl = http.defaults.baseURL;
export const nav = [
  {
    path: baseUrl+Path.login,
    data: {
      "data": {
        "userPicture": null,
        "password": "scm-1234",
        "credentialsNonExpired": true,
        "accountNonExpired": true,
        "lastLoginDate": null,
        "state": null,
        "userId": 1,
        "authorities": [{"authority": "ROLE_USER"}],
        "enabled": true,
        "accountNonLocked": true,
        "lastLoginIp": null,
        "username": "scm"
      },
      "message": "success",
      "respCode": "0000"
    }

  },
  {
    path: baseUrl+Path.getLoginUser,
    data: {
      "data": {
        "userPicture": null,
        "password": "scm-1234",
        "credentialsNonExpired": true,
        "accountNonExpired": true,
        "lastLoginDate": null,
        "state": null,
        "userId": 1,
        "authorities": [{"authority": "ROLE_USER"}],
        "enabled": true,
        "accountNonLocked": true,
        "lastLoginIp": null,
        "username": "scm"
      },
      "message": "success",
      "respCode": "0000"
    }
  },
  {
    path: baseUrl+Path.logout,
    data: {
      "data": {
        "userPicture": null,
        "password": "scm-1234",
        "credentialsNonExpired": true,
        "accountNonExpired": true,
        "lastLoginDate": null,
        "state": null,
        "userId": 1,
        "authorities": [{"authority": "ROLE_USER"}],
        "enabled": true,
        "accountNonLocked": true,
        "lastLoginIp": null,
        "username": "scm"
      },
      "message": "success",
      "respCode": "0000"
    }
  }
]

