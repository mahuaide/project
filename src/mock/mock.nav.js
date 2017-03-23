import Path from '../http/path'

export const nav = [
  {
    path: Path.login,
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
    path: Path.getLoginUser,
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

