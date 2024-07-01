"use strict";
const galleryList = document.querySelector(".gallery__list");
const largeImage = document.getElementById("largeImg");
galleryList.addEventListener("click", (e)=>{
    e.preventDefault();
    const imgLink = e.target.closest(".list-item__link");
    largeImage.src = imgLink.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
