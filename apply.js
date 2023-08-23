const normalPerson = {
  firstName: "Rahim",
  lastName: "Uddin",
  salary: 15000,
  getFullname: function () {
    console.log(this.firstName, this.lastName);
  },
  chrageBIll: function (amount, tax, charge) {
    this.salary = this.salary - amount - tax - charge;
    return this.salary;
  },
};
// normalPerson.getFullname();
// normalPerson.chrageBIll(1400);
// console.log(normalPerson.salary);

const Person = {
  firstName: "KArim",
  lastName: "Uddin",
  salary: 25000,
};

normalPerson.chrageBIll.apply(Person,[3000,200,100])
console.log(Person.salary,"Person salary");