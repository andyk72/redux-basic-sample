const actionTypes = require('../actions/actions-types');

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === actionTypes.CLAIM_CREATE) {
        return bagOfMoney - action.payload.amount;
    } else if (action.type === actionTypes.POLICY_CREATE) {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
};

module.exports = accounting;