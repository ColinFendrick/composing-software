import money from 'moneysafe';
import ledger from 'moneysafe/ledger/index.js';

const { $, add } = money;
const { $$, subtractPercent, addPercent } = ledger;

console.log(
	add($(.1), $(.2)).toNumber() === $(.3).toNumber()
);

const eighty = $$(
	$(40),
	$(60),
	// subtract discount
	subtractPercent(20),
	// add tax
	addPercent(10)
).toNumber();

console.log(eighty);
