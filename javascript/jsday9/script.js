
fetch('./jewelry.json')
.then((res) =>{

    return res.json();
})
.then((data) =>{
    console.log(data);

    const newdata = data.jewelry;
    console.log(newdata);

    let rows = "";
    newdata.forEach((jewelry) => {
        rows += `<div class="card" style="width: 18rem;">
        <img style=" padding: 10px;border-radius: 10px;width:fill-content" src="${jewelry.image_url}" class="card-img-top" alt="...">
        <div  style="padding: 10px;" class="card-body">
          <h5 class="card-title">${jewelry.name}</h5>
          <p class="card-text">${jewelry.price}$</p>
          <p class="card-text">${jewelry.description}</p>
          <p class="card-text"> Available Stock: ${jewelry.stock}</p>
        </div>
        </div>`
    });

    document.getElementById("main").innerHTML = rows;
})
.catch((err) => console.log(err))