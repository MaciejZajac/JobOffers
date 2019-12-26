export const SIsAuthenticated = state => !!state.authReducer.user;

export const SToken = state => state.authReducer.user.token;

export const SGetUser = state => state.authReducer.user;

export const SGetCompanyProfile = state => state.offerReducer.profile;

// PUBLIC
export const SGetOffers = state => state.offerReducer.offers;

// PRIVATE
export const SGetPrivateOffers = state => state.offerReducer.privateOffers;

export const SIsLoading = state => state.offerReducer.isLoading;

export const SIsAuthLoading = state => state.authReducer.isLoading;
