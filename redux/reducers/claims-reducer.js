const actionTypes = require('../actions/actions-types');

const claims = (oldListOfClaims = [], action) => {
    if (action.type === actionTypes.CLAIM_CREATE) {
        return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims;
};

module.exports = claims;