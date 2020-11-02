import React from 'react';
import useExpensesData from './useExpensesData';

export default () => {
  const  billsData  = useExpensesData();

  return (
    <table className='table table-striped' aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Date</th>
          <th>WeekNum</th>
          <th>Source</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amt</th>
        </tr>
      </thead>
      <tbody>
        {billsData.map(x => (
          <tr>
            <td>{x.dateString}</td>
            <td>{x.weekNum}</td>
            <td>{x.source}</td>
            <td>{x.category}</td>
            <td>{x.description}</td>
            <td>{x.amount}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
}
