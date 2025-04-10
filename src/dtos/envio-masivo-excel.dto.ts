export class EnvioExcelRow {
  [key: string]: string; // Permite cualquier nombre de columna

  // O específica alternativas:
  numero?: string;
  mensaje?: string;
  número?: string; // versión con acento
  celular?: string; // otro nombre común
  // ... etc
}