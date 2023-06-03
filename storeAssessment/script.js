//apikey
let main = document.getElementById("main");
    let getData = () => {
     //  fetch my api
        url = "https://fakestoreapi.com/products";
        fetch(url).then((response) => {
            //stringify my data
            return response.json();
        }).then(data => {
            console.log(data);
           //itreate my products array
           data.forEach(element => {
               //display my data
               main.innerHTML += '<div class="card-container" ><div class="img"><img src="' + element.image
                   + '" alt=""></div><div class="name">' + element.title + '</div><div class="price">$' + element.price + '</div><div class="description">' + element.description.slice(0,100)+'...</div></div ></div>';
           });
        }).catch(err => {
            console.log(err);
        })
    }
getData()