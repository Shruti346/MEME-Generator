const generateMEMEBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTittle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator  .meme-author");


const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src",url);
    memeTittle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by : ${author}`;
};





const generateMeme = ()=> {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response) => Response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });
};



generateMEMEBtn.addEventListener("click", generateMeme);
generateMeme();