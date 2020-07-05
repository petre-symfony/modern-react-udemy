console.clear();

//People dropping off a form (Action Creator)

const CreatePolicy = (name, amount) => {
  return {
    // Action (Form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}
const DeletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const CreateClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amountOfMoneyToCollect
    }
  }
}

// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM'){
    // we care about this action (Form)
    return [...oldListOfClaims, action.payload];
  }

  // we don't care about the action (Form)
  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount
  }

  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
}

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(CreatePolicy('Alex', 20));
store.dispatch(CreatePolicy('Jim', 30));
store.dispatch(CreatePolicy('Bob', 40));

store.dispatch(CreateClaim('Alex', 120));
store.dispatch(CreateClaim('Jim', 50));

store.dispatch(DeletePolicy('Bob'));

console.log(store.getState());