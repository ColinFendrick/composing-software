import { pipe } from './functions.js';

const withLogging = logger => o =>
	Object.assign({}, o, {
		log (text) {
			logger(text);
		}
	});

//in a different module with no explicit mention of
// withLogging--we just assume it's there...
const withConfig = config => (o = {
	log: (text = '') => console.log(text) // Default values to fake type annotation
}) => Object.assign({}, o, {
	get (key) {
		return config[key] === undefined ?
			this.log(`Missing config key: ${key}`)
			: config[key];
	}
});

// Yey another module that imports withLogging and withConfig
const createConfig = ({ initialConfig, logger }) =>
	pipe(
		withLogging(logger),
		withConfig(initialConfig)
	)({});

const initialConfig = { host: 'localhost' };

const logger = console.log.bind(console);

const config = createConfig({ initialConfig, logger });

console.log(config.get('host'));
console.log(config.get('notThere'));
