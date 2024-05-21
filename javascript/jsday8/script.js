fetch('https://dummyjson.com/recipes')
.then(res =>{
   return res.json();

})
.then((data)=>{
    console.log(data.recipes);
    const newdata= data.recipes;
    let rows="";
newdata.forEach((recipes) => {
    rows +=`<div class="card" style="width: 30rem;">
    <img style=" width:fill-content"  src="${recipes.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${recipes.name}</h5>
      
      <p class="card-text">${recipes.ingredients}</p>
      <p class="card-text">${recipes.caloriesPerServing} cal</p>
    </div>
  </div>` 
});
document.getElementById("food").innerHTML = rows;

})