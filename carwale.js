

var carModels=[
{
        id:1,
        carName:"Hyundai Exter",
        price:"Rs.7.06 Lakh",
        city:"On-Road Price, Chennai",
        image:"./image/car-2.jpeg",
        },
        {
          id:2,
          carName:"Toyota Rumion",
          price:"Rs.12.57 Lakh",
          city:"On-Road Price, Chennai",
          image:"./image/car-3.jpeg",
        },
        {
          id:3,
          carName:"Maruti Fronx",
          price:"Rs.8.59 Lakh",
          city:"On-Road Price, Chennai",
          image:"./image/car-1.jpeg",
        },
        
]


let brandAll = [
  {
      id:1,
      images:"./image/model-1.jpg",
      brandName:"Maruti",
  },
  {
      id:2,
      images:"./image/model-2.jpg",
      brandName:"Hyundai",
  },
  {
      id:3,
      images:"./image/model-3.jpg",
      brandName:"Tata",
  },
  {
      id:4,
      images:"./image/model-4.jpg",
      brandName:"Toyota",
  },
  {
      id:5,
      images:"./image/model-5.jpg",
      brandName:"Mahindra",
  },
  {
      id:6,
      images:"./image/model-6.jpg",
      brandName:"BMW",
  },
  {
      id:7,
      images:"./image/model-7.jpg",
      brandName:"Porsche",
  },
  {
      id:8,
      images:"./image/model-8.jpg",
      brandName:"Kia",
  },
  {
      id:9,
      images:"./image/model-9.jpg",
      brandName:"Benz",
  },
  {
      id:10,
      images:"./image/model-10.jpg",
      brandName:"MG",
  },
  {
      id:11,
      images:"./image/model-11.jpg",
      brandName:"Rover",
  },
  {
      id:12,
      images:"./image/model-12.jpg",
      brandName:"Audi",
  },
]






//3 card

  var allRow=document.getElementById("row-sec");
let all=carModels.map(e=>
  `<div class="col-lg-4 col-md-6 col-sm-12">
  <div class="card_cars">
    <div class="images">
      <a href="hyundaiexter.html?id=${e.id}">
        <img src=${e.image} alt="">
      </a>
    </div>
    <p class="para">${e.carName}</p>
    <p class="para-2">${e.price} <span class="all">onwards</span>
    </p>
    <p class="para">${e.city}</p>
    <button class="button">View Price Breakup</button>
  </div>
</div>`
).join(' ');
allRow.innerHTML =all;

//12..image
var newCars=document.getElementById("Maruti-sec");
let allCar = brandAll.map( em=>
    ` <div class="col-lg-2 col-md-4 col-sm-3 p-0">
    <div class="model">
      <a href="maruticars.html?id=${em.id}&&name=${em.brandName}">
        <img src=${em.images} alt="">
      </a>
      <p class="para-1">${em.brandName}</p>
    </div>
  </div>`
 ).join(' ');
newCars.innerHTML=allCar;

