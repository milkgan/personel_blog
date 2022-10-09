import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "2",
      smallImg: "http://112.74.85.165:3006/img/banner01_thumb.jpg",
      bigImg: "http://112.74.85.165:3006/img/banner01.jpg",
      title: "春眠不觉晓",
      description: "处处闻啼鸟",
    },
    {
      id: "1",
      smallImg:
        "http://112.74.85.165:3006/img/banner02_thumb.jpg",
      bigImg:
        "http://112.74.85.165:3006/img/banner02.jpg",
      title: "空山不见人",
      description: "但闻人语响",
    },
    {
      id: "3",
      smallImg: "http://112.74.85.165:3006/img/banner03_thumb.jpg",
      bigImg: "http://112.74.85.165:3006/img/banner03.jpg",
      title: "君自故乡来",
      description: "应知故乡事",
    },
  ],
});
