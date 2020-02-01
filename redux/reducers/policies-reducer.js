const actionTypes = require('../actions/actions-types');

const policies = (listOfPolicies = [], action) => {
    if (action.type === actionTypes.POLICY_CREATE) {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === actionTypes.POLICY_DELETE) {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
};

module.exports = policies;