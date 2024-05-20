

fetch('https://dummyjson.com/products')
.then(res =>{

    return res.json();
})
.then(data =>{
    console.log(data.products);

    const newdata = data.products;

    let rows = "";
    newdata.forEach((product) => {
        rows += `<tr>
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
        <td><img style="width: 200px  ; height: 200px;" src=${product.images[0]}></td>
        </tr>`;
    });

    document.getElementById("bodytable").innerHTML = rows;

})
.catch(err=>console.log(err))

