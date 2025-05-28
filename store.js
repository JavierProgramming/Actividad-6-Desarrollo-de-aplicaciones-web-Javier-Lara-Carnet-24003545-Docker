import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';
import goalReducer from './reducers/goalsSlice';
import logger from './middleware/logger';
import checker from './middleware/checker';

// Configuración del store de Redux
const store = configureStore({
  reducer: {
    todos: todoReducer,   // Slice para tareas (todos)
    goals: goalReducer    // Slice para metas (goals)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)     // Middleware personalizado para logging
      .concat(checker)    // Middleware para validar contenido prohibido
});

export default store;
