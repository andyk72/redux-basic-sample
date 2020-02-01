const actionTypes = require('./actions-types');

const claimCreate = (name, amount) => {
    return {
        type: actionTypes.CLAIM_CREATE,
        payload: {
            name: name,
            amount: amount
        }
    };
};

module.exports = claimCreate;