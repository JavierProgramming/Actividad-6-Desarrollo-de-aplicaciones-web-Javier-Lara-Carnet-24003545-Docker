// setupTests.js

/**
 * Extiende Jest con los matchers personalizados de Testing Library para el DOM.
 * Esto permite usar aserciones como:
 * expect(element).toHaveTextContent(/react/i)
 * Más información: https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom/extend-expect';

// Puedes agregar otras configuraciones globales para tus tests aquí.
// Por ejemplo, mocks de fetch o configuración de entorno global.

// Ejemplo opcional de configuración adicional:
// global.fetch = require('jest-fetch-mock');
