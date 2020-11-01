import React from 'react';
import useBillsData from './useBillsData';

export default () => {
  const  billsData  = useBillsData();

  return (
    <table className='table table-striped' aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Date</th>
          <th>WeekNum</th>
          <th>Source</th>
          <th>Bucket</th>
          <th>Description</th>
          <th>Amt</th>
        </tr>
      </thead>
      <tbody>
        {billsData.bills.map(x => (
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
