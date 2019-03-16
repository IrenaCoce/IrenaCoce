function Hotel(name) {
    this.name = name;
    this.rooms = [];
    this.employees = [];

    this.work = function() {
        for (var index = 0; index < this.rooms.length; index++) {
            var room =  this.rooms[index];
            room.spendDay();
        }
    }

    this.admit = function (customer) {
        for (var index = 0; index < this.rooms.length; index++) {
            var room =  this.rooms[index];
            if (!room.isDirty && !room.isTaken) {
                room.fillVacation(customer);
                return;
            }
        }
    }

    this.generateEmployees = function(number) {
        for (var index = 1; index <= number; index++) {
            var employee = new Human(index);
            this.employees.push(employee);
        }
    }
    
    this.generateRooms = function() {
        for (var index = 1; index <= 100; index++) {
            var room = new Room(index);
            this.rooms.push(room);
        }
    }

this.cleanAllRooms= function(){
    for (var i=0; i< this.rooms.length; i++){
        if(this.rooms === room.isDirty)
    }
}
    
    this.generateRooms();
    this.generateEmployees(10);
}