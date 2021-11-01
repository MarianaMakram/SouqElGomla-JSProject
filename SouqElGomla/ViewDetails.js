
function ProdDetails() 
{
   
     scrollTo(0, 0);
      var id_prod =this.value;
    var section = document.getElementById("section");
    var child = section.lastElementChild;
    while (child) {
        section.removeChild(child);
        child = section.lastElementChild;
    }
    var row =document.createElement("div");
    row.setAttribute("class","row");
    section.appendChild(row);
    var lftSide = document.createElement("div");
    lftSide.setAttribute("id", "leftSide");
    lftSide.setAttribute("class", "col-lg-3");
    var CenterDiv = document.createElement("div");
    CenterDiv.setAttribute("id", "centerDiv");
    CenterDiv.setAttribute("class","col-lg-9");
    row.appendChild(lftSide);
    row.appendChild(CenterDiv);
    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://fakestoreapi.com/products/" + id_prod);
    xhr.send();
    var im = document.createElement("img")
    var title = document.createElement("h1")
    var price = document.createElement("p")
    var description = document.createElement("p")
    var category = document.createElement("p")
    var rating = document.createElement("div")
    var btn = document.createElement("button")

    var btn2 = document.createElement("button")
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

            console.log(xhr.response)

            var result = JSON.parse(xhr.response)

            console.log(result.data);
            for (var i = 0; i < 1; i++) {
                im.setAttribute("src", result.image)
                im.setAttribute("class", "img-fluid")
                document.getElementById("leftSide").appendChild(im);
                title.innerText = result.title;
                price.innerText = " price : " + result.price;
                description.innerText = result.description;
                category.innerText = result.category;
                var star = parseInt(Math.round(result.rating.rate));
                rating.innerHTML += " rating : ";
                for (var x = 0; x < star; x++) {

                    rating.innerHTML += " <img src='Filled_star.png'>";
                }
                for (var y = 0; y < 5 - star; y++) {

                    rating.innerHTML += "<img src='empty_star.png'>";
                };
                document.getElementById("centerDiv").appendChild(title);
                document.getElementById("centerDiv").appendChild(price);
                document.getElementById("centerDiv").appendChild(description);
                document.getElementById("centerDiv").appendChild(category);
                document.getElementById("centerDiv").appendChild(rating);

                //buttons of back  to home and Add to cart 
                btn.setAttribute("class", "btn btn-primary")
                btn2.setAttribute("class", "btn btn-warning")
                btn.innerText = "Back to Home Page";
                btn.setAttribute("onclick", "fun()")
                btn2.innerText = "ADD to cart";
                btn2.setAttribute("value", id_prod)
                btn2.style.margin = "50px";
                btn2.addEventListener("click", addID);
                document.getElementById("centerDiv").appendChild(btn);
                document.getElementById("centerDiv").appendChild(btn2);



            }

        }
    })
}
   function fun(){

    location.replace("index.html");
   }

