// reportWebVitals.js

/**
 * Reporta métricas de rendimiento (Web Vitals) si se proporciona un callback.
 * Ideal para enviar datos a herramientas de análisis o monitoreo.
 *
 * @param {function} onPerfEntry - Función que recibe las métricas.
 */
const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry === 'function') {
    import('web-vitals').then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);   // Cumulative Layout Shift
        getFID(onPerfEntry);   // First Input Delay
        getFCP(onPerfEntry);   // First Contentful Paint
        getLCP(onPerfEntry);   // Largest Contentful Paint
        getTTFB(onPerfEntry);  // Time To First Byte
      }
    ).catch(error => {
      console.error("Error importing web-vitals:", error);
    });
  }
};

export default reportWebVitals;
