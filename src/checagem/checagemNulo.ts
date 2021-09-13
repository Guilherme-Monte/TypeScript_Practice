// TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
function liveDangerously(x?: number | null) {
  // A exclamação se livra do erro de ser possivelmente nulo, mas não resolve após a compilação
  // Por isso tem que fazer a verificação do mesmo jeito
  if (!x) return;
  console.log(x!.toFixed());
}

liveDangerously(1234);
liveDangerously(undefined);