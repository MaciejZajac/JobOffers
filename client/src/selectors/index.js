export const SIsAuthenticated = state => !!state.authReducer.user;

export const SToken = state => state.authReducer.user.token;
