$(document).ready(function () {
  $('#delivery label[for="pick-up"]').click(function () {
    $("#location").hide()
  })
  $('#delivery label[for="deliver"]').click(function () {
    $("#location").show()
  })
  $("form#build-pizza").submit(function (event) {

    var name = $("#pizzaname :selected")
    var size = $("#pizzasize :selected")
    var crust = $("#pizzacrust :selected")
    var topping = $("#pizzatopping :selected")

    var number = parseInt($("input#number").val())
    var delivery = $("#delivery :checked").val()

    var location = $("#location").val()

    var pizza = new Pizza(name, size, crust, topping, number)

    // alert(pizza.size)
    placeOrder(pizza, delivery)
    event.preventDefault()
  })
})

function Pizza(name, size, crust, topping, number) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.number = number;
}

Pizza.prototype.orderPrice = function () {
  var sizePrice = parseInt(this.size.val());
  var crustPrice = parseInt(this.crust.val());
  var toppingPrice = parseInt(this.topping.val())

  var pizzaPrice = (sizePrice + crustPrice + toppingPrice) * this.number;
  return pizzaPrice;
}

function placeOrder(pizza, delivery, location) {
  var deliveryPrice = 300
  var totalPrice = pizza.orderPrice()
  if (delivery === "true") {
    totalPrice += deliveryPrice
    // alert("Delivery on point")
  }
  $("#output").html(totalPrice)

}