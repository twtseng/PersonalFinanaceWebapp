import React from 'react';
import authService from './api-authorization/AuthorizeService';

const getExpensesData = async () => {
    const token = await authService.getAccessToken();
    const response = await fetch('FinanceData/Expenses', {
        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    return data;
}
const initialState = [];
function useExpensesData() {
    const [ expensesData, setExpensesData ] = React.useState(initialState);
    if (expensesData === initialState) {
      getExpensesData()
      .then(data => setExpensesData(data))
      .catch(err => console.log(`getExpensesData error: ${err}`));
    }
    return expensesData;
}

export default useExpensesData;