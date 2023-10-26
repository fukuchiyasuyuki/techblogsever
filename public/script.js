const postTitle = document.getElementById("title");
const postData = document.getElementById("date");
const postPageUrl = document.getElementById("url");
const postImage = document.getElementById("image");
const postMessage = document.getElementById("message");
const formDOM = document.getElementById("form");

let inputTitle = "";
let inputData = "";
let inputPageUrl = "";
let inputImage = "";
let inputMessage = "";


postTitle.addEventListener("change", (e) => {
    console.log(e.target.value);
    inputTitle = e.target.value;
});

postData.addEventListener("change", (e) => {
    console.log(e.target.value);
    inputData = e.target.value;
});

postPageUrl.addEventListener("change", (e) => {
    console.log(e.target.value);
    inputPageUrl = e.target.value;
});

postImage.addEventListener("change", (e) => {
    let file_reader = new FileReader();
    file_reader.readAsText(e.target.files[0]);
    let data = e.target.files[0];
    inputImage = data.name;
    console.log(inputImage);
});

postMessage.addEventListener("change", (e) => {
    console.log(e.target.value);
    inputMessage = e.target.value;
});

formDOM.addEventListener("submit", async (e) => {
    e.preventDefault();
    if(inputTitle && inputData && inputPageUrl && inputImage && inputMessage){
        console.log("success");
        //postメソッドで送信する
        try{
            console.log(inputTitle);
            const data = await axios.post("/api/v1/article", {
                title:inputTitle,
                updated:inputData,
                url:inputPageUrl,
                image:inputImage,
                content:inputMessage,
            });

            console.log(data);

        }catch (err){
            console.log(err);
        }

        //投稿したらinputのvalueを削除
        inputTitle = "";
        inputData = "";
        inputPageUrl = "";
        inputImage = "";
        inputMessage = "";
    }else{
        console.log("error");
    }
});



