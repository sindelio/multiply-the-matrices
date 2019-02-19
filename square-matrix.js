class SquareMatrix {
	constructor(order){
		if(order < 0 || isNaN(order)) throw new Error('The order of a square matrix must be a positive integer')
		this.order = order;
		this.entries = [];
		for(let i = 0; i < order; i++){
			this.entries[i] = [];
			for(let j = 0; j < order; j++){
				this.entries[i][j] = 0;
			}
		}
	}

	setEntries(arrayRepresentation){
		var order = this.order;
		var entry = null;
		for(let i = 0; i < order; i++){
			for(let j = 0; j < order; j++){
				entry = arrayRepresentation[i * order + j];
				if(isNaN(entry)) throw new Error("Matrix's entries must be numbers");
				this.entries[i][j] = entry;
			}
		}
	}

	static multiply(m1, m2){
		if(m1.order !== m2.order) throw new Error('The matrices must have the same order');
		var order = m1.order;
		var m3 = new SquareMatrix(order);
		var aux = 0;
		for(let i = 0; i < order; i++){
			for(let j = 0; j < order; j++){
				for(let k = 0; k < order; k++){
					aux += m1.entries[i][k] * m2.entries[k][j]; 
				}
				m3.entries[i][j] = aux;
				aux = 0;
			}
		}
		return m3;
	}

	static log(matrix){
		let row = '|';
		for(let i = 0; i < matrix.order; i++, row = '|'){
			for(let j = 0; j < matrix.order; j++){
				row += ' ' + matrix.entries[i][j]
			}
			row += ' |';
			console.log(row);
		}
		console.log('');
	}
}

module.exports = SquareMatrix;

/* DEBUGGERS

let m1 = new SquareMatrix(2);
m1.setEntries([1, 1, 1, 1]);
SquareMatrix.log(m1);

let m2 = new SquareMatrix(2);
m2.setEntries([1, 1, 1, 1]);
SquareMatrix.log(m2);

let m3 = SquareMatrix.multiply(m1, m2);
SquareMatrix.log(m3);

*/