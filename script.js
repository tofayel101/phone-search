document.getElementById('search-button').addEventListener('click',function(){
   searchFood()
})
document.getElementById('search-field').addEventListener('keydown',function(e){
   if (e.keyCode==13) {
      searchFood()
   }
})

const searchFood=()=>{
   const searchField= document.getElementById('search-field');
   const searchText=searchField.value;
   searchField.value='';
   if (searchText=='') {
      alert('please type something')
   } else {
      
   

   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res=>res.json())
        .then(data=>displayFood(data.meals))
   }
}

const displayFood=data=>{
    const meals=data;
    const searchResult=document.getElementById('search-result')
    searchResult.innerHTML=''
                                    // console.log(meals)
                                    // meals.forEach(meal => {
                                    //     console.log(meal)
                                    // });
for (const meal of meals) {
   const div=document.createElement('div')
   div.innerHTML=` <div class="col">
   <div class="card">
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title" id="title">${meal.strMeal}</h5>
       <p class="card-text" style='font-size:12px' id="details">${meal.strInstructions.slice(0,250)}</div>
   </div>
 </div>`
 searchResult.appendChild(div)
}
}