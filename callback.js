function findWaldo(arr,found){
  for (var i = 0; i<arr.length;i++){
    if(arr[i] === "Waldo"){
      found();
    }
  }
}
function actionWhenFound(){
  console.log("Found ");

}
findWaldo(["Alice", "Bob", "Waldo", "Winston"],actionWhenFound);