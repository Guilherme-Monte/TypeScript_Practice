// Tem que colocar as GET para que o método seja do tipo GET e não string
// Caso contrário, aparece um erro
const req = { url: "https://example.com", method: "GET" as "GET" };

// Diferente de method = "GET" || "POST" || "PUT" || "DELETE" que infere o valor da string e não o tipo do atributo
function handleRequest(url: string, method: "GET" | "POST" | "PUT" | "DELETE") {
  console.log(`Requisição ${method} em ${url}`);
}

// Colocar o alias em qualquer um dos dois
// Melhor adicionar no objeto para assegurar o tipo e não precisar contar que o valor seja sempre correto na chamada da função
handleRequest(req.url, req.method as "GET");

// Coverte todas as propriedades em tipos literais usando o "as const"
const req2 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);

// The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.