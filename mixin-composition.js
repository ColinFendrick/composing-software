import { pipe } from './functions.js';

const withConstructor = constructor => o => ({
	__proto__: {
		constructor
	},
	...o
});

const withFlying = o => {
	let isFlying = false;
	return {
		...o,
		fly() {
			isFlying = true;
			return this;
		},
		land() {
			isFlying = false;
			return this;
		},
		isFlying: () => isFlying
	};
};

const withBattery = ({ capacity }) => o => {
	let percentCharged = 100;
	return {
		...o,
		draw(percent) {
			const remaining = percentCharged - percent;
			percentCharged = remaining > 0 ? remaining : 0;
			return this;
		},
		recharge(percent) {
			const newCharge = percentCharged + percent;
			percentCharged = newCharge > 100 ? 100 : newCharge;
			return this;
		},
		getCharge: () => percentCharged,
		getCapacity: () => capacity
	};
};

const withDriving = o => {
	let currentSpeed = 0;
	return {
		...o,
		drive(speed) {
			currentSpeed = speed;
			return this;
		},
		stop() {
			currentSpeed = 0;
			return this;
		},
		currentSpeed: () => currentSpeed
	};
};

const withMusic = o => {
	let currentSong = '';
	return {
		...o,
		playSong(song) {
			currentSong = song;
			return this;
		},
		stopSong() {
			currentSong = '';
			return this;
		},
		currentSong: () => currentSong
	};
};

const createDrone = ({ capacity = '3000mAh' } = {}) => pipe(
	withFlying,
	withBattery({ capacity }),
	withConstructor(createDrone)
)({});

const createGuitar = ({ capacity = '150mAh' } = {}) => pipe(
	withMusic,
	withBattery({ capacity }),
	withConstructor(createGuitar)
)({});

const myGuitar = createGuitar();

console.log(`
  Can play: ${myGuitar.playSong('While My Guitar Gently Weeps').currentSong()},
  Default battery capacity: ${myGuitar.getCapacity()},
  Can stop: ${myGuitar.stopSong().currentSong()},
  constructor: ${myGuitar.constructor === createGuitar}
`);

const myDrone = createDrone({ capacity: '5500mAh' });

console.log(`
  can fly: ${myDrone.fly().isFlying() === true},
  can land: ${myDrone.land().isFlying() === false},
  battery capacity: ${myDrone.getCapacity()},
  battery status: ${myDrone.draw(50).getCharge()},
  battery drained: ${myDrone.draw(75).getCharge()},
  battery refilled: ${myDrone.recharge(60).getCharge()}
`);

console.log(`
  constructor linked: ${myDrone.constructor === createDrone}
`);

// One off, does not link constructor (since no constructor fn exists)
const myElectricCar = pipe(
	withDriving,
	withBattery({ capacity: '4000mAh' })
)({});

console.log(`
  can drive: ${myElectricCar.drive(30).currentSpeed()},
  can stop: ${myElectricCar.stop().currentSpeed()},
  battery: ${myElectricCar.getCapacity()},
  battery drained: ${myElectricCar.draw(120).getCharge()},
  battery refilled: ${myElectricCar.recharge(75).getCharge()}
`);

