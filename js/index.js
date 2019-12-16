var pizzaName = ["Tikka","Crocodile","hotdog","fatayer","Raspberry"];
var pizzaSize = ["Large","Medium","Small"];
var pizzaCrust = ["Double","Thin","Gluten"];
var pizzzaTopping = ["Bell","Mushroom","Meat"];

function getName() {
    var name = $(".name :selected").val();
    return parseInt(name);
}
function getSize() {
    var size = $(".size :selected").val();
    return parseInt(name);
}