// Agregar una opción predeterminada en instrucciones Switch
function switchOfStuff (val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 'a':
        answer =  'apple';
        break;
      case 'b':
        answer =  'bird';
        break;
      case 'c':
        answer =  'cat';
        break;
     default:
        answer= 'Stuff'
    }
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff (1);