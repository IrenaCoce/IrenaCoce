var hotel = new Hotel("Hilton");

for (var i = 0; i < 30; i++) {
    var newCustomers = getRandomNumber(2, 5);
    for (var index = 0; index < newCustomers; index++) {
        var customer = new Human(index);
        hotel.admit(customer);
        
    }
    if (i % 3===0 ){
        var employee = new Human(index);
        hotel.generateEmployees(3);
        console.log(hotel.employees);
    }


    hotel.work();
}

console.log("The hotel finished working ", hotel);