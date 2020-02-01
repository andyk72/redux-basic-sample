const actionTypes = require('./actions-types');

const policyCreate = (name, amount) => {
    return {
        type: actionTypes.POLICY_CREATE,
        payload: {
            name: name,
            amount: amount
        }
    };
};

module.exports = policyCreate;