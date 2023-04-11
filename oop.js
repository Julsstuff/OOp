// 11.1
// class Employee  {
// 	constructor(name, salary) {
// 		console.log(name + ' ' + salary);
// 	}
// }
// new Employee('john', '50000');

// 12.1,2,3,4
// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
// 	show() {
// 		return this.name + ' ' + Number(this.salary/100 * 10 + this.salary) ;
// 	}
// }
// let employee = new Employee('john', 50000);
// console.log(employee.show());

// 13.1,2,3
// class Employee  {
// 	#name;
// 	#salary;
//  #age;

// 	constructor(name, salary, age) {
// 		this.#name = name;
//         this.#salary = salary;
//         this.#age = age;
// 	}
	
// 	show() {
// 		return this.#name + ' ' + this.#salary + ' ' + this.#age;

// 	}
// }
// let employee = new Employee('john', 50000, 18);
// console.log(employee.show());

// 14.1
// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this.#addSign(this.salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
// }

// 15.1
// class Employee {
// 	constructor(name, salary) {
// 		this._name = name;
// 		this._salary = salary;
// 	}
	
// 	getName() {
// 		return this._name;
// 	}
// 	getSalary() {
// 		return this._salary;
// 	}
// }

// 15.2
// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this._addSign(this.salary);
// 	}
	
// 	_addSign(num) {
// 		return num + '$';
// 	}
// }

// 16.1,2,3
// class Employee  {
// 	#name;
// 	#salary;
// 	#age;
// 	constructor(name, salary, age) {
// 		this.#name = name;
// 		this.#salary = salary;
//         this.#age = age;

// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
	
// 	getSalary() {
// 		return this.#salary;
// 	}
//     getAge() {
// 		return this.#age;
// 	}
// }
// let employee = new Employee('john', 50000, 18);
// console.log(employee.getName());
// console.log(employee.getSalary());
// console.log(employee.getAge());

// 17.1
// class Employee  {
// 	#name;
// 	#salary;
// 	#age;
// 	setName(name) {
// 		this.#name = name;
// 	}
// 	setSalary(salary) {
// 		this.#salary = salary;
// 	}
//     setAge(age){
//         this.#age = age;
//     }
// 	getName() {
// 		return this.#name;
// 	}
	
// 	getSalary() {
// 		return this.#salary;
// 	}
//     getAge() {
// 		return this.#age;
// 	}
// }
// let employee = new Employee;
// employee.setName('john');
// employee.setSalary(50000);
// employee.setAge(18);
// console.log(employee.getName());
// console.log(employee.getSalary());
// console.log(employee.getAge());

// 18.1,2
// class Employee  {
// 	#age;
// 	#salary;
	
// 	setAge(age) {
// 		if (age <= 120) {
// 			this.#age = age;
// 		} else {
// 			throw new Error('age is incorrect');
// 		}
// 	}
//     setSalary(salary) {
// 		this.#salary = salary;
// 	}
// 	getAge() {
// 		return this.#age;
// 	}
// 	getSalary() {
// 		return this.#salary + '$';
// 	}
// }
// let employee = new Employee;
// employee.setAge(120);
// employee.setSalary(50000);
// console.log(employee.getAge());
// console.log(employee.getSalary());

// 19.1
// class Employee  {
// 	#name;
// 	#surn;

// 	setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
// 	setSurn(surn) {
// 		this.#surn = surn;
// 		return this;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }
// let employee = new Employee ;
// employee.setName('john').setSurn('smit');
// console.log(employee .getName());
// console.log(employee.getSurn());

// 20.1
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let emp1 = new Employee('john');
// let emp2 = new Employee('eric');
// console.log(emp1 === emp2);// вывелось false потому что john не равен eric

// 20.2
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let emp1 = new Employee('john');
// let emp2 = new Employee('eric');
// console.log(emp1 === emp1);// вывелось true потому что сравнивается один и тот же объект

// 20.3
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let emp1 = new Employee('john');
// let emp2 = new Employee('john');
// console.log(emp1 === emp2);// вывелось false потому что объекты разные

// 20.4
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let emp1 = new Employee('john');
// let emp2 = new Employee('eric');
// console.log(emp1 !== emp1);// вывелось false потому что john равен john

// 20.5
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let emp1 = new Employee('john');
// let emp2 = emp1;
// console.log(emp1 === emp2);// вывелось true потому что emp1 равно emp2

// 20.6
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let emp1 = new Employee('john');
// let emp2 = new Employee('eric');
// console.log(emp1 !== emp2);// вывелось true потому что значения объектов не равны

// 20.7
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let emp1 = new Employee('john');
// let emp2 = emp1;
// emp2.name = 'eric';
// console.log(emp1 === emp2); //вывелось true потому что emp2.name не присваивает значение eric

// 21.1
// class Student {
// }
// class Employee {
// }
// let employee = new Employee;
// console.log(employee instanceof Employee);//вывелось true потому что объект принадлежит классу
// console.log(employee instanceof Student);//вывелось false потому что объект не принадлежит этому классу

// 21.2
// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];
// for (let user of users) {
//     if(user instanceof Employee){
//         console.log(user.name)
//     }
// }

// 22.1.2.3.4
// class Validator {
// 	show(cor){
// 		if(typeof(cor) == "string"){
// 			console.log('все ок')
// 		}
// 		else{
// 			console.log(' это int ')
// 		}                                                                                                                                                                                                                                                                                                                                                                
// 	}
	
// }
// let validarot = new Validator;
// console.log(validarot.show(123))
// class isEmail {
// 	show(cor){
		
// 		let a = 'kmb@.com'  
// 		if(a == cor){
			
// 			console.log('Email написан  корректно')
// 		}
// 		else{
// 			console.log('Email написан некорректно')
// 		}                                                                                                                                                                                                                                                                                                                                                                  
// 	}
	
// }
// let email = new isEmail;

// console.log(email.show('kmb@.com'))


// class isDomain {
// 	show(cor){
		
// 		let a = 'code.ru'  
// 		if(a == cor){
			
// 			console.log('Домен написан правильно')
// 		}
// 		else{
// 			console.log('Домен написан неправильно')
// 		}                                                                                                                                                                                                                                                                                                                                                                  
// 	}
	
// }
// let domain = new isDomain;

// console.log(domain.show('code.ru'))



// class isDomain {
// 		show(cor){
			
// 			let a = 'abc123'
			 
// 			if(a ){
// 				console.log('В строке есть цифры')
// 			}
// 			else{
// 				console.log('В строке нету цифр')
// 			}                                                                                                                                                                                                                                                                                                                                                                  
// 		}
		
// 	}
// 	let domain = new isDomain;
	
// 	console.log(domain.show())

// 23.1.2.3 
// class City {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name, position, department) {
        
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// }

// let department = new City('Police');
// let position = new City('boss');
// let employee = new Employee('john', position, department);
// console.log(employee.name);
// console.log(employee.department.name);
// console.log(employee.position.name);

// 24.1.2
// class Employee {
// #name;
// constructor(name) {
// this.#name = name;
// }
// getName() {
// return this.#name;
// }
// }
// let users = [
// new Employee('john'),
// new Employee(78000),
// new Employee('eric'),
// new Employee(8967876),
// new Employee('kyle'),
// new Employee(89768),
// ];
// for (let Employee of users) {
// console.log(Employee.getName());
// }

// 25.1.2.3
// class User {
// 	#name;
	
// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// }
// class EmployeesCollection {
// 	#users;
	
// 	constructor() {
// 		this.#users = [];
// 	}
// 	add(user) {
// 		this.#users.push(user);
// 	}
// 	show() {
// 		for (let user of this.#users) {
// 			console.log(user.getName());
// 		}
// 	}
// }
// let uc = new EmployeesCollection;
// uc.add(new User('john', 50000));
// uc.add(new User('eric', 40000));
// uc.add(new User('kyle',60000));
// uc.show();


// 26.1.2.3.4.5
// //1
// let reg = new RegExp;
// console.log(reg); //наполнение
// console.dir(reg); //наполнение, свойства и методы
// console.log(reg instanceof RegExp);// true, так как reg принадлежит RegExp

// //2
// let arr = [1, 2, 3];
// console.log(arr);// строковое наполнение, свойства
// console.dir(arr);// свойства
// console.log(arr instanceof Array);// принадлежность, true

// //3
// let arr = new Array(1, 2, 3);
// console.log(arr);
// console.dir(arr);
// console.log(arr instanceof Array); //то же самое, что и во втором задании

// //4
// let obj = {a: 1, b: 2, c: 3};
// console.log(obj);// наполнение, свойства
// console.dir(obj);// тип , свойста
// console.log(obj instanceof Object);// true

// //5
// let obj = new Object;
// console.log(obj);// пустой массив
// console.dir(obj);// ничего, так как объект пуст, только его тип
// console.log(obj instanceof Object);// true

// 27.1.2.3.4
// //1
// let elem = document.querySelector('div');
// console.dir(elem); null

// //2
// let elem = document.querySelector('input');
// console.dir(elem); null

// //3
// let elems = document.querySelectorAll('div');
// console.dir(elems); NodeList

// //4
// let elem = document.querySelector('div');
// let elems = elem.children;
// console.dir(elems); error

























