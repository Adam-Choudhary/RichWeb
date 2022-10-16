//array of images
let dogImages = [
    "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=45&dpr=2&s=none",
    "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg",
    "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo",
	"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fstory%2Fare-dogs-really-color-blind&psig=AOvVaw3qrfX3FQFdXexrxSxydKPm&ust=1666044679924000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKiAhJzi5foCFQAAAAAdAAAAABAh"
];

//warning message
alert("The beast eye quivers")

//change background color
document.body.style.background = 'yellow';

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * dogImages.length)
    imgs[i].src = dogImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Dogs are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about dogs.";
}
