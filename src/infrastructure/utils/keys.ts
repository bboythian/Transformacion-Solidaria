/**
 * Utilidades para generar keys estables en listas React
 */

/**
 * Genera un hash simple de un string para usarlo como key estable
 * @param str - String para hacer hash
 * @returns Hash numérico estable
 */
export const simpleHash = (str: string): string => {
  let hash = 0;
  if (str.length === 0) return hash.toString();
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString();
};

/**
 * Genera una key estable basada en contenido y posición
 * @param content - Contenido del elemento
 * @param index - Índice como fallback
 * @returns Key estable
 */
export const generateStableKey = (content: string, index: number): string => {
  // Usar hash del contenido si es único, sino usar índice
  if (content && content.length > 0) {
    return `item-${simpleHash(content)}`;
  }
  return `fallback-${index}`;
};
