function mDown(obj) {
    obj.style.backgroundColor = "#FFFFFF";
    imagens = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
    obj.src = imagens[Math.floor(Math.random() * 3)];    
}