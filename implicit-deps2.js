import { pipe } from './functions.js';

const withLogging = logger => o =>
	Object.assign({}, o, {
		log(text) {
			logger(text);
		}
	});

const addConfig = config => o => Object.assign({}, o, {
	get (key) {
		return config[key] === undefined ?
			this.log(`Missing config key ${key}`)
			: config[key];
	}
});

const withConfig = ({ initialConfig, logger }) => o =>
	pipe(
		withLogging(logger),
		addConfig(initialConfig)
	)(o);

// The factory only needs to know about withConfig now
const createConfig = ({ initialConfig, logger }) =>
	withConfig({ initialConfig, logger })({});

const initialConfig = { host: 'localhost' };

const logger = console.log.bind(console);
const config = createConfig({ initialConfig, logger });

console.log(config.get('host'));
config.get('notThere');
