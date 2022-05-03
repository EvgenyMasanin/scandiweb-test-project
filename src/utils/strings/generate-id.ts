type GenerateId = (basis?: string | number) => string

export const generateId: GenerateId = basis =>
  `${basis ?? Math.random()}-${Date.now()}-${String(Math.random()).slice(2)}`
