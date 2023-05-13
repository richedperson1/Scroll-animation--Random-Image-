const containerBox = document.querySelectorAll(".container-help");



window.addEventListener("scroll", scrollAnimation);

scrollAnimation();


async function fetchingImgURL(url) {
    const urlImg = await fetch(url)
    return urlImg
}


async function image2div() {
    const width = containerBox[0].clientWidth
    const height = containerBox[0].clientHeight
    // const windowWidth = Number(window.innerWidth * 0.)
    // console.log("--->", windowWidth);
    url = `https://picsum.photos/${width}/${height}`
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

