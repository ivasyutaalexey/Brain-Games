import {game} from '../tools/core';
import {getRandomInt} from '../tools/utils';

const gameRules = 'What is the result of the expression?';
const maxRandom = 100;

const gameData = () => {
	const map = new Map();
	const operations = ['+', '-', '*'];

	let functions = {
		'+': function (x, y) {
			return x + y
		},
		'-': function (x, y) {
			return x - y
		},
		'*': function (x, y) {
			return x * y
		},
	};

	const operation = operations[getRandomInt(0, operations.length - 1)];
	const a = getRandomInt(1, maxRandom);
	const b = getRandomInt(1, maxRandom);

	const question = `${a} ${operation} ${b}`;
	const answer = functions[operation](a, b);

	map.set('question', question);
	map.set('answer', answer);

	return map;
};

export default () => {
	game(gameRules, gameData);
};
