let box = document.getElementById("card");
let content = document.getElementById("content");
let list = "";
box.style.display = "none";
fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((result) => {
        // console.log(result);
        // content.innerHTML = `<img  src="${result[6].image}" />`;
        for (let i = 0; i < result.length; i++) {
            list += ` <tr onclick="detail(${result[i].id})">
            <td>${result[i].id}</td>
            <td>${result[i].title}</td>
            <td>${result[i].price} $</td>
            <td>${result[i].rating.rate}</td>
            <td>
            <a href="${result[i].image}" target="_blink"><img src="${result[i].image}" class="api_image" /></a>
            </td>
        </tr>`;
        };
        content.innerHTML = list;
    });

function detail(id) {
    fetch("https://fakestoreapi.com/products/" + id)
        .then((response) => response.json())
        .then((data) => {
            card.innerHTML = `<div class="card-body">
            <img src="${data.image}"/>
            <div class="info">
                <h3>${data.title}</h3>
                <h4>${data.price} $</h4>
                <h4>${data.rating.rate}</h4>
            </div>
        </div>`;
            card.style.display = "block";
        });
}