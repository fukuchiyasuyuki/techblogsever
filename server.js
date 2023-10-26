const express = require("express");
const app = express();
const mongoose = require("mongoose");
const article = require("./models/article");

const PORT = 5000;

app.use(express.static("public"));
app.use(express.json());

//データベースとの接続
mongoose.connect("mongodb+srv://yfukuchi:abc@cluster0.zyroavb.mongodb.net/article?retryWrites=true&w=majority")
.then(() => console.log("データベースに接続されました"))
.catch(() => console.log("データベースの接続に失敗しました"));

//getメソッド データベースからデータを全て取得する
 //エンドポイントを設定し、非同期処理で実行する。asyncの引数にはRequestとresponseを渡す。
 app.get("/api/v1/articles" , async (req, res) => {
    try{
        const allarticles = await article.find({});
        res.status(200).json(allarticles);

    }catch (err){
        console.log(err);
    };
});

//postメソッド
app.post("/api/v1/article" , async (req, res) => {
    try{
        await article.create(req.body);
        res.status(200).json(createArticle);

    }catch (err){
        console.log(err);
    }
 });


app.listen(PORT, console.log("サーバーが起動しました"));