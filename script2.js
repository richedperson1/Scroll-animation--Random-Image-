const containerBox = document.querySelectorAll(".container-help");



window.addEventListener("scroll", scrollAnimation);

scrollAnimation();


async function fetchingImgURL(url) {
    const urlImg = await fetch(url)
    return urlImg
}


async function image2div() {
    url = "https://picsum.photos/500/300"
    for (let divEle of containerBox) {
        imagURL = await fetchingImgURL(url)
        imagURL = imagURL.url
        if (imagURL != "") {

            divEle.style.backgroundImage = `url(${imagURL})`
            // console.log(divEle);
        }
        else {
            divEle.style.backgroundImage = `url(https://shorturl.at/guIL8)`
            // console.log(divEle);

        }
    }
}

image2div()

function scrollAnimation() {
    const triggerPoint = (window.innerHeight / 5) * 4;
    containerBox.forEach((val) => {
        const boxTop = val.getBoundingClientRect().top;

        if (boxTop < triggerPoint) {
            val.classList.add("show");
        }
        else {
            val.classList.remove("show");
        }
    })
}