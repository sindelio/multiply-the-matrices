const SquareMatrix = require('./square-matrix');
const ReadLine = require('readline');

const rl = ReadLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('******SQUARE MATRIX MULTIPLICATION******\n');
console.log('INSTRUCTIONS');
console.log('This program allows you to multiply 2 square matrices of the same order, and the result is printed out.');
console.log('To input a matrix, type an array representation of it.');
console.log('For instance, the matrix:');
var mExample = new SquareMatrix(2);
mExample.setEntries([1, 2, 3, 4]);
SquareMatrix.log(mExample);
console.log('Should be typed as: 1 2 3 4');
console.log('END OF INSTRUCTIONS\n')

rl.question('Type the order of the matrices(positive integer): ', (input) => {
	var order = parseInt(input);
	// console.log('order:', order)
	var m1 = new SquareMatrix(order);
	// SquareMatrix.log(m1);
	var m2 = new SquareMatrix(order);
	// SquareMatrix.log(m2);

	rl.question('Type matrix 1: ', (input) => {
		var m1Aux = input.split(' ');
		if(m1Aux.length !== ( order ** 2 )) throw new Error('Square matrices must have order*order entries');
		var m1Array = [];
		for(let i = 0; i < m1Aux.length; i++){
			m1Array[i] = parseInt(m1Aux[i]);
		}
		m1.setEntries(m1Array);
		SquareMatrix.log(m1);

		rl.question('Type matrix 2: ', (input) => {
			var m2Aux = input.split(' ');
			if(m2Aux.length !== ( order ** 2 )) throw new Error('Square matrices must have order*order entries');
			var m2Array = [];
			for(let i = 0; i < m2Aux.length; i++){
				m2Array[i] = parseInt(m2Aux[i]);
			}
			m2.setEntries(m2Array);
			SquareMatrix.log(m2);

			var m3 = SquareMatrix.multiply(m1, m2);
			console.log('m1 * m2 =');
			SquareMatrix.log(m3);

			rl.close(); // To close the interface with stdin, else the program hangs
		});
	});
});