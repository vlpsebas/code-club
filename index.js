export default {
	fetch(request) {
		console.log(request.method)
		if(request.url == "https://clubhw.vsebas.workers.dev/" & request.method == "GET") {
			return new Response('Hello worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
		if(request.url == "https://clubhw.vsebas.workers.dev/" & request.method == "POST") {
			return new Response('why you change me?', {
				headers: {
					'content-type': 'application/json',
				},
			});
		}
		else{
			return new Response('Error Worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
	},
 };
