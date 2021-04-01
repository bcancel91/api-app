$(document).ready(function () {
  var input = document.querySelector(".input_text");
  var main = document.querySelector("#location");
  var temp = document.querySelector(".temp");
  var description = document.querySelector(".description");
  var clouds = document.querySelector(".clouds");
  var button = document.querySelector(".submit");
  var apiKey = "d9c4b7ac4e3e4266f00314eb0160a429";
  var button2 = document.querySelector("#submit2");
  var button3 = document.querySelector("#submit3");
  var roverPhotos = [];
  button.addEventListener("click", (name) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        input.value +
        "&units=imperial&appid=" +
        apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        var image = document.createElement("img");
        var pic = document.getElementById("picture");
        var tempValue = data["main"]["temp"];
        var nameValue = data["name"];
        var descValue = data["weather"][0]["description"];
        var icon = data["weather"][0]["icon"];
        main.innerHTML = nameValue;
        description.innerHTML = "Description - " + descValue;
        temp.innerHTML = "Temp  " + tempValue + "ºF";
        input.value = "";
        image.src = " http://openweathermap.org/img/w/" + icon + ".png";
        pic.appendChild(image);
      })
      .catch((err) => alert("Wrong city name!"));
  });

  button3.addEventListener("click", (name) => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        $(".noShow").hide();
        var drinks = data.drinks;
        var ingred = [
          data.drinks[0].strIngredient1,
          data.drinks[0].strIngredient2,
          data.drinks[0].strIngredient3,
          data.drinks[0].strIngredient4,
          data.drinks[0].strIngredient5,
          data.drinks[0].strIngredient6,
          data.drinks[0].strIngredient7,
          data.drinks[0].strIngredient8,
          data.drinks[0].strIngredient9,
          data.drinks[0].strIngredient10,
          data.drinks[0].strIngredient11,
          data.drinks[0].strIngredient12,
        ];
        for (var i = 0; i < ingred.length; i++) {
          if (ingred[i] !== null) {
            $("#l1").append("<li id='l1'>" + ingred[i] + "</li>");
          }
        }

        $(".drinkName").text(data.drinks[0].strDrink);

        $(".cocktailImg").attr("src", data.drinks[0].strDrinkThumb);

        // console.log($(".cockImg").src);

        $(".card-text1").text(data.drinks[0].strInstructions);
      })

      .catch((err) => alert(err));
  });
  fetch("https://vegan-news.p.rapidapi.com/getnews", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "239537ddaamsh350339eef0c85e2p1ef21ejsnb6a3651ed903",
      "x-rapidapi-host": "vegan-news.p.rapidapi.com",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  // const settings = {
  //   async: true,
  //   crossDomain: true,
  //   url: "https://vegan-news.p.rapidapi.com/getnews",
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "239537ddaamsh350339eef0c85e2p1ef21ejsnb6a3651ed903",
  //     "x-rapidapi-host": "vegan-news.p.rapidapi.com",
  //   },
  // };

  // $.ajax(settings).done(function (response) {
  //   // $("#articleTitle").text(response.articals[2].title);

  //   // $("#articlePic").attr("src", response.articals[2].strDrinkThumb);
  //   // $("#articleText").text(response.articals[2].description);

  //   // $("#articleTitle2").text(response.articals[1].title);

  //   // // $("#articlePic").attr("src", response.articals[1].strDrinkThumb);
  //   // $("#articleText2").text(response.articals[1].description);

  //   console.log(response);
  //   console.log(response.articles[1].urlToImage);
  //   console.log(response.articles[1].title);
  //   console.log(response.articles[1].description);
  //   console.log(response.articles[1].url);
  // });
});
fetch("https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/5494", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "b484d9d1e0msh79624006ce28d4ap17958cjsn80d02f4c6be9",
    "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
