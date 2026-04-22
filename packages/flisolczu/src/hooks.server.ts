export async function handleError({ error, status, message }) {
	console.log(error);
	console.log(status);
	console.log(message);

	return {
		message: 'Whoops!'
	};
}
