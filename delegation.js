// When an object forwards to another obj
// Ex: built-in types to forward built-in methods
// Conserves memory and dynamincally update many instances

const delegate = (a,b) => Object.assign(Object.create(a),b);
