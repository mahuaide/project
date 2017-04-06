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
  },
  {
    path:Path.getWorkflowState,
    data:{
      "code":"0",
      "beans":[
        {
          "userId":"11012",
          "userName":"哈士奇",
          "userUri":"",
          "executeTime":1489035996000,
          "State":"1",
          "workflowDemo":"TANGYAOYAO/DEMO",
          "workflow":"TANGYAOYAO"
        },
        {
          "userId":"11012",
          "userName":"哈士奇",
          "userUri":"",
          "executeTime":1489043996000,
          "State":"1",
          "workflowDemo":"TANGYAOYAO/DEMO",
          "workflow":"TANGYAOYAO"
        },
        {
          "userId":"11012",
          "userName":"哈士奇",
          "userUri":"",
          "executeTime":1589063996000,
          "State":"1",
          "workflowDemo":"TANGYAOYAO/DEMO",
          "workflow":"TANGYAOYAO"
        }
      ]
    }
  }
]

