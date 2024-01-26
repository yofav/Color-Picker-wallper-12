
  const imagesRandom = [
    "scenery1.jpg",
    "scenery2.jpg",
    "scenery3.jpg",
    "scenery4.jpg"
  ];
  


  const btn1 = document.getElementById("btn-ran");
  
  btn1.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = `url('${imagesRandom[randomNumber]}')`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * imagesRandom.length);
  }
  
  