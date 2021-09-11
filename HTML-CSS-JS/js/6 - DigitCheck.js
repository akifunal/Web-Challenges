function createCheckDigit(membershipId) {
	const idSum = membershipId.split('').reduce((a, b) => +a + +b, 0);

	if (idSum < 10) return idSum;

	return createCheckDigit(String(idSum));
}

console.log(createCheckDigit('55555'));
