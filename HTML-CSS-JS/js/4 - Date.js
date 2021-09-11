function formatDate(userDate) {
	// format from M/D/YYYY to YYYYMMDD
	const array = userDate.split('/').map(i => (+i < 10 ? `0${i}` : i));

	return `${array[2]}${array[0]}${array[1]}`;
}

console.log(formatDate('1/31/2014'));
