import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp163720566.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666516250&t=7a29439a903d845a6e04d6d756bf01ef",
    siteTitle: "个人博客",
    github: "https://github.com/milkgan",
    qq: "xxxxxx",
    weixin: "xxxxxx",
    mail: "xxxxxx@qq.com",
    icp: "桂ICPxxx备案号",
    githubName: "milkgan",
    favicon: "http://xxxxxx",
  },
});
