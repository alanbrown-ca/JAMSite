const http = require('http')

// Create Node server
const server = http.createServer( (req, res) => {
	if (req.method === 'POST') {
		let body = ''
		req.on('data', data => { body += data })
		req.on('end', () => {
			console.log(body)
			res.writeHead(200, {'Content-Type': 'text/plan'})
			res.end('success')
		})
	}
})

// Listen for contact form submissions
server.listen(2222)