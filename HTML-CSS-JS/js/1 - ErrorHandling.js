const ensure = value => {
	if (value === undefined) throw new Error('error');
	return value;
};

try {
	console.log(ensure());
} catch (err) {
	console.log(err);
}
