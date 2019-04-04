function findWaldo(arr,found){
  for (var i = 0; i<arr.length;i++){
    if(arr[i] === "Waldo"){
      found(i) ;
    }
  }
}
function actionWhenFound(i){// call abck function
  console.log("Found " +"index "  + i);

}
findWaldo(["Alice", "Bob", "Waldo", "Winston"],actionWhenFound);

