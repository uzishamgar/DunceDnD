// diceRoll.js

const Math = require('mathjs');

function getRandomNumber(minimum, maximum) {
	const min = Math.ceil(minimum);
	const max = Math.floor(maximum);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.d4Roll = function() {
	return this.getRandomNumber(1, 4);
};

exports.d6Roll = function() {
	return getRandomNumber(1, 6);
};

exports.d8Roll = function() {
	return getRandomNumber(1, 8);
};

exports.d12Roll = function() {
	return getRandomNumber(1, 12);
};

exports.d20Roll = function() {
	return getRandomNumber(1, 20);
};

exports.percentRoll = function() {
	return getRandomNumber(0, 99);
};

exports.coinFlip = function() {
	const coin = getRandomNumber(0, 1);
	if (coin == 0) {
		return 'heads';
	}
	else {
		return 'tails';
	}
};
/*
exports = {
	d4Roll,
	d6Roll,
	d8Roll,
	d12Roll,
	d20Roll,
	percentRoll,
	coinFlip,
};
*/
