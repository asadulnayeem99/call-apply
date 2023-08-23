const normalPerson = {
  firstName: "Rahim",
  lastName: "Uddin",
  salary: 15000,
  getFullname: function () {
    console.log(this.firstName, this.lastName);
  },
  chrageBIll: function (amount,tax,charge) {
    this.salary = this.salary - amount - tax -charge;
    return this.salary;
  },
};
normalPerson.getFullname();
normalPerson.chrageBIll(1400);
console.log(normalPerson.salary);

const Person = {
    firstName:"KArim",
    lastName:"Uddin",
    salary:25000
}
// const heroChargeBill = normalPerson.chrageBIll.bind(Person);
// console.log(heroChargeBill(15000));

//another method

normalPerson.chrageBIll.call(Person,900);
console.log(Person.salary,"new method");