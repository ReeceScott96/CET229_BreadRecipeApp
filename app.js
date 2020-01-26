// Dom7
var $ = Dom7;
// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app', 
  routes: [
    // home page
    {
      path: '/',
      url: './index.html',
      name: 'home',
    },
    // recipes page
    {
      path: '/recipes/',
      componentUrl: './recipes.html',
      name: 'recipes',
    },
    // recipe page
    {
      path: '/recipe/:id',
      componentUrl: './recipe.html',
      name: 'recipe',
    },
    {
      path: '/about/',
      componentUrl: './about.html',
      name: 'about',
    },
  ],
});
var mainView = app.views.create('.view-main');
//load up data from the JSON file at runtime.
app.request.json('recipes.json', function (mydata) {
  app.data.recipes = mydata;
});
console.log(app.data);