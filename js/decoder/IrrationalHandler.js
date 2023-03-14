/**
	Stripped down irrational number handler to provide
	PI-PHI-EULER connections to integers.

 */



let IrrationalHandler = function () {

}

IrrationalHandler.prototype.setNumber = function (number) {
    this.number = number;
}

IrrationalHandler.prototype.getRowForNumber = function (number) {
    this.setNumber(number);
    return this.getPositionAndSums();
}

IrrationalHandler.prototype.getSumUpToNumber = function (n, type) {
	let handler = new IrrationalNumber(type);	
	
}

IrrationalHandler.prototype.getSumUpToNumberPI = function (n) {
	return this.getSumUpToNumber(n, 'PI');	
}

IrrationalHandler.prototype.getSumUpToNumberPI = function (n) {
	return this.getSumUpToNumber(n, 'PHI');	
}

IrrationalHandler.prototype.getSumUpToNumberPI = function (n) {
	return this.getSumUpToNumber(n, 'EULER');	
}

IrrationalHandler.prototype.getPositionAndSums = function () {
    return {
        'PI' : this.getPIPositionAndSum(),
        'PHI': this.getPHIPositionAndSum(),
        'EULER': this.getEULERPositionAndSum()
    };
}

IrrationalHandler.prototype.getPIPositionAndSum = function () {
    return this.getPositionAndSum('PI');
}

IrrationalHandler.prototype.getPHIPositionAndSum = function () {
    return this.getPositionAndSum('PHI');
}

IrrationalHandler.prototype.getEULERPositionAndSum = function () {
    return this.getPositionAndSum('EULER');
}

IrrationalHandler.prototype.getPositionAndSum = function (type) {
    let irrationalNumber = new IrrationalNumber(type);
    return irrationalNumber.getPositionAndSum(this.number);
}