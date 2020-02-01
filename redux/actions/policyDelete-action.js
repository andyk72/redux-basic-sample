const actionTypes = require('./actions-types');

const policyDelete = (name) => {
    return {
        type: actionTypes.POLICY_DELETE,
        payload: {
            name: name
        }
    };
};

module.exports = policyDelete;