import Mock from "mockjs";

//延时200-600毫秒请求到数据
Mock.setup({
  timeout: "200-600",
});

Mock.mock("/v1/data/getDataList", {
  code: 0,
  "data|10-20": [
    {
      "id|10-300": 129, // 编号
      "category_id|1-4": 1, // 分类ID
      name: "@cname#@natural(100, 800)", // 名称
      "tag|1": true, // 徽标是否显示
      "atlas|1": true, // 图集是否显示
      "isCast|1": true, // 已铸是否显示
      "isExchange|1": true, // 已兑是否显示
      img: "pic1.png", // 图片名称
    },
  ],
});
