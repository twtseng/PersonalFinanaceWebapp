import React from 'react';
import AppContext from './AppContext';
import getBillsData from './GetBillsData';
import moment from 'moment';

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
    <table className='table table-striped' aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Date</th>
          <th>WeekNum</th>
          <th>Source</th>
          <th>Bucket</th>
          <th>Description</th>
          <th>Amounty Mount</th>
        </tr>
      </thead>
      <tbody>
        {billsData.map(x => (
          <tr>
            <td>{x.dateString}</td>
            <td>{x.weekNum}</td>
            <td>{x.source}</td>
            <td>{x.bucket}</td>
            <td>{x.description}</td>
            <td>{x.amount}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
}
