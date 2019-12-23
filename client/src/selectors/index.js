export const SIsAuthenticated = state => !!state.authReducer.user;

export const SToken = state => state.authReducer.user.token;

export const SGetUser = state => state.authReducer.user;

export const SGetPrivateOffers = state => state.offerReducer.offers;
