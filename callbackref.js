function findWaldo(arr,actionWhenFound){

arr.forEach(function (element, index){
  //for (var i = 0; i<arr.length;i++){
    if( element=== "Waldo")
      actionWhenFound(index) ;
    });

}
function actionWhenFound(i){// call back function
  console.log("Found " +"index "  + i);

}
findWaldo(["Alice", "Bob", "Waldo", "Winston"],actionWhenFound);

