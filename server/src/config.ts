const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

let config = {
  // http 端口
  port: 443,

  // 注册正则
  ['rege']: {
    username: /^[\d\w]{4,12}$/,
    password: /^[\d\w]{6,12}$/,
    nickname: /^[\u4e00-\u9fa5\d\w]{2,8}$/,
    gender: /^0|1$/,
    birthYear: /^\d{4}$/,
  },

  // 验证码时间
  verifyCodeDuration: .5 * HOUR,

  // 2天
  tokenExpires: 2 * DAY,


  // 绑定奖励
  bindReward: 1000,

  // 日常奖励
  dayReward: 100,

  // 加入黑店结束时间,5min
  roomEndTime: 5 * MIN,

  // 可以评论黑店时间,1小时到3小时
  commentBeginTime: .5 * HOUR,
  commentEndTime: 3 * HOUR,


  // db.createUser({user: 'puman', pwd: 'puman', roles: [{role: "dbAdminAnyDatabase", db: "admin"}, {role: "readWriteAnyDatabase", db: "admin"}, {role: "userAdmin", db: "doctor"}, {role: "readWrite", db: "doctor"}] });
  // *** 数据库
  connectStr: 'mongodb://puman:puman@118.31.11.29:27017/doctor',
  // *** api 
  apiPrefix: 'http://api.puman.xyz:3000/',

  // 微信
  // 是否mock openId
  isMockOpenId: false,
  // appId和appSecret
  wx: {
    appId: 'wx78e8934b88e1cd61',
    appSecret: '3da2d219dfd019df08433c2cd60ee2de',
    // 信息模版Id
    templateId: 'Dnl4Or0oVcnf06-5pT8oN71d4tSDYhoAon_P8FyOvKE',
  },

  // mockOpenId
  mockOpenId: 'mockOpenId',

  // 定期清理过期黑店
  clearRoom: {
    // 清理个数
    // 防止一次清理太多,造成性能问题
    count: 20,
    // 定期清理的间隔时间
    interval: 10 * MIN,
  },


  commonErrCode: {
    tokenInvalid: 50,
    userInvalid: 100,
    roomExists: 200,
    roomInvalid: 300,
    notAdmin: 500,
  },

  // admin
  adminList: [
    {
      userName: 'admin',
      password: 'dota123',
    },
  ]
};

let isTest: boolean = [...process.argv].indexOf('--test') >= 0;

if (isTest) {
  config = Object.assign(config, {
    isMockOpenId: true,
    apiPrefix: 'http://localhost:3000/',
    connectStr: 'mongodb://118.31.11.29:27017/doctor',

    clearRoom: {
      // 清理个数
      // 防止一次清理太多,造成性能问题
      count: 10,
      // 定期清理的间隔时间
      interval: 5 * SEC,
    },
  });

}



export default config;




