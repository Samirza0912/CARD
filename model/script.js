let name = document.getElementById("fname");
let surname = document.getElementById("sname");
let username = document.getElementById("uname");
let btn = document.getElementById("addbtn")
let img = document.getElementById("img")
let dv = document.getElementById("area")
let b = document.getElementById("b12")

btn.onclick = function () {
    // let nv = name.value;
    // let sv = surname.value;
    // let uv = username.value;
    // let im = img.value
    // dv.innerHTML = `
    // <div class="card" style="width: 18rem;">
    // <img src="${im}" class="card-img-top" alt="...">
    // <div class="card-body">
    //   <h5 class="card-title">${nv} ${sv}</h5>
    //   <p class="card-text">@${uv}</p>
    //   <a href="#" class="btn btn-primary">x</a>
    // </div>
    // </div>`
    console.log("salam");
}
b12.onclick = function () {
    dv.innerHTML = "";
}