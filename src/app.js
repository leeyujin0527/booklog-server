require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

// 라우터 연결
const recommendRoutes = require("./routes/recommend.routes");
app.use("/api/recommend", recommendRoutes);

// 서버 실행
app.listen(3000, () => {
  console.log("server running on 3000");
});