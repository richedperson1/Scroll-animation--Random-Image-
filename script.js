const containerBox = document.querySelectorAll(".container-help");



window.addEventListener("scroll", scrollAnimation);
scrollAnimation();

async function fetchingImg(url) {
    const apiDate = await fetch(url)
    const apiJson = await apiDate.json()
    return apiJson.links.download
}
const width = 200
const height = 200
let accessKey = "ZEIaixZ2N8VZzuLZz390Au5M1WODU9kO9GFqzx9b9nk"
let url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=nature&orientation=squarish&width=${width}&height=${height}`

console.log(url);

async function givinImage2Div() {
    for (let divEle of containerBox) {
        imagURL = await fetchingImg(url)

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

givinImage2Div()
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