

//// json request and display response in home page

var result;
var xhr = new XMLHttpRequest();
xhr.open("get", "https://fakestoreapi.com/products");
xhr.send();

xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = JSON.parse(xhr.response);
        console.log(result);

        var catageryArr = [];
        for (var i = 0; i < result.length; i++) {
            if (!catageryArr.includes(result[i].category)) {
                catageryArr.push(result[i].category);
            }
        }


        for (var j = 0; j < catageryArr.length; j++) {

            var count = 0;

            var section = document.getElementById("section");
            var cat = document.createElement("div");
            cat.setAttribute("class", "row mt-2");
            section.appendChild(cat);


            var hcat = document.createElement("h4");
            hcat.setAttribute("class", "col-12 border border-bottom-0 border-light");
            hcat.innerHTML = "<b>" + catageryArr[j] + "</b>";
            cat.appendChild(hcat);

            var ProdCat = document.createElement("div");
            ProdCat.setAttribute("class", "row border border-top-0 border-light p-2");
            section.appendChild(ProdCat);

            for (let index = 0; index < result.length; index++) {

                if (catageryArr[j] == result[index].category) {

                    count++;
                    /**create div for each product and append it to the section */
                    var div = document.createElement("div")
                    div.setAttribute("class", "card col-3 p-2 text-dark bg-light mb-3");
                    ProdCat.appendChild(div);


                    /**create image for each div and append it to the div */
                    var img = document.createElement("img")
                    var srcImg = result[index].image
                    img.setAttribute("class", "card-img-top mx-auto")
                    img.setAttribute("src", srcImg);
                    div.appendChild(img)
                    img.style.width = "200px";
                    img.style.height = "200px";


                    /**create paragraph for each product title and append it to the div */
                    var p = document.createElement("p");
                    p.setAttribute("class", "card-text mb-0");
                    p.innerHTML = result[index].title;

                    /**css for text length */
                    p.style.whiteSpace = "nowrap";
                    p.style.overflow = "hidden";
                    p.style.textOverflow = "ellipsis";
                    p.style.maxWidth = "250px";
                    div.appendChild(p)


                    /**create button for each product add cart and append it to the div */
                    var btnDetails = document.createElement("button");
                    btnDetails.setAttribute("class", "btn ms-1 mb-3");
                    btnDetails.style.backgroundColor = "#d2e6d0";
                    btnDetails.style.borderRadius = "3rem";
                    btnDetails.style.width = "120px";
                    btnDetails.innerHTML = "view details";
                    btnDetails.setAttribute("value", result[index].id)

                    //// add listener to vie details button
                    btnDetails.addEventListener("click", ProdDetails);

                    div.appendChild(btnDetails);

                    /**create paragraph for each product price and append it to the div */
                    var price = document.createElement("p");
                    price.setAttribute("class", "card-text");
                    price.innerHTML = "<b> " + result[index].price + "  EGP<b>&emsp;&emsp;&emsp;&emsp;";
                    div.appendChild(price);


                    /**create paragraph for each product rating and append it to the div */

                    var rate = Math.round(result[index].rating.rate);

                    for (var x = 0; x < rate; x++) {

                        price.innerHTML += "<img src='Filled_star.png'>";
                    }
                    for (var y = 0; y < 5 - rate; y++) {

                        price.innerHTML += "<img src='empty_star.png'>";
                    }
                    // div.appendChild(pstar)


                    /**create paragraph for each product ship and append it to the div */
                    var pShip = document.createElement("p");
                    pShip.setAttribute("class", "card-text");
                    pShip.innerHTML = "Free shipping";
                    div.appendChild(pShip)

                    /**create button for each product add cart and append it to the div */
                    var btn = document.createElement("button");
                    btn.setAttribute("class", "btn ms-5 me-5");
                    btn.style.backgroundColor = "#ed872f";
                    btn.style.borderRadius = "3rem";
                    btn.setAttribute("value", result[index].id)

                    btn.addEventListener("mouseover", function (event) {
                        event.target.style.backgroundColor = "#b54c26";
                    })
                    btn.addEventListener("mouseleave", function (event) {
                        event.target.style.backgroundColor = "#ed872f";
                    })
                    btn.innerHTML = "ADD TO CART";
                    div.appendChild(btn);

                    btn.addEventListener("click", addID);
                }

            }

            hcat.innerHTML += "( " + count + " items)";
        }

    }
})

