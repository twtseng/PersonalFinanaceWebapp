import React from 'react';
import authService from './api-authorization/AuthorizeService';

const getBillsData = async () => {
    const token = await authService.getAccessToken();
    const response = await fetch('FinanceData/Bills', {
        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    return data;
}

function useBillsData() {
    const initialState = {bills:[], years:[], months:[], weeks:[]};
    const [ billsData, setBillsData ] = React.useState(initialState);
    if (billsData === initialState) {
      getBillsData()
      .then(data => setBillsData(data))
      .catch(err => console.log(`refreshBillsData error: ${err}`));
    }
    return billsData;
}

export default useBillsData;