require('@babel/polyfill');
import axios from 'axios';

async function doSearch(search) {
    try{
        let result = await axios('https://forkify-api.herokuapp.com/api/search?q=' + search);
        const recipes = result.data.recipes;
        console.log(recipes);

        result = await axios('https://forkify-api.herokuapp.com/api/search?q=' + recipes[1].recipe_id);
        console.log(result);
    }catch(error){
        alert('Асуудал гарлаа: ' + error);

    }
    
}

doSearch('pizza');