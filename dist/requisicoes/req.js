const req = { url: "https://example.com", method: "GET" };
function handleRequest(url, method) {
    console.log(`Requisição ${method} em ${url}`);
}
handleRequest(req.url, req.method);
const req2 = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
