import React from 'react';
import AppContext from './AppContext';
import getBillsData from './GetBillsData';

export default () => {
  const { billsData, setBillsData } = React.useContext(AppContext);
  const refreshBillsData = async () => {
    if (billsData.length == 0) {
      const data = await getBillsData();
      setBillsData(data);
    }
  }
  React.useEffect(()=>{
    refreshBillsData();
  },[])
  return (
    <div>
      <h1>New home default functional component123</h1>
      <h3>{JSON.stringify(billsData)}</h3>
    </div>
  );
}

