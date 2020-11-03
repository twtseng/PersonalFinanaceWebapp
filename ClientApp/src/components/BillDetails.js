import React from 'react';
import AppContext from './AppContext';

export default () => {
  const [data, setData] = React.useState([]);
  const { expenseData } = React.useContext(AppContext);
  React.useEffect(() => {
      expenseData.getExpensesData(setData);
  },[]);

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
        {data.map(x => (
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
