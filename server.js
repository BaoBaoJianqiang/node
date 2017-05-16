var http = require('http');

http.createServer(function (request, response) {
	request.setEncoding('utf-8');

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/json'});

	console.log("someone comes");

	// 发送响应数据 "Hello World"
	response.end('{"isError":true, "errorType":1, "errorMessage":"Network Error", "result": {"cinemaId":1, "cinemaName":"Star"}}\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

