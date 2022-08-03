//Use un IIFE Para crear un modulo
let funModule = (function(){
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function(){
                return true;
            }
        },
        //modules
        singMixin: function(obj){
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            }
        }
    }
})();