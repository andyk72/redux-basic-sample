// Redux functions
const {
    createStore,
    combineReducers } = require('redux');

// Actions
const policyCreate = require('./redux/actions/policyCreate-action');
const policyDelete = require('./redux/actions/policyDelete-action');
const claimCreate = require('./redux/actions/claimCreate-action');

// Reducers
const claimsReducer = require('./redux/reducers/claims-reducer');
const accountingReducer = require('./redux/reducers/accounting-reducer');
const policiesReducer = require('./redux/reducers/policies-reducer');

// Redux store
const store = createStore(combineReducers({
    claims: claimsReducer,
    accountAmount: accountingReducer,
    policies: policiesReducer
}));

// Sample use
// 1. Alex, Jim and Bob create their policies with the insurance
store.dispatch(policyCreate('Alex', 20));
store.dispatch(policyCreate('Jim', 30));
store.dispatch(policyCreate('Bob', 40));

// 2. Alex and Jim make a claim to the insurance
store.dispatch(claimCreate('Alex', 120));
store.dispatch(claimCreate('Jim', 50));

// 3. Bob deletes his policy
store.dispatch(policyDelete('Bob'));

// See the application state
console.log(store.getState());