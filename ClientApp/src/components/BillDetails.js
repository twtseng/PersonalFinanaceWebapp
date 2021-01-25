import React from 'react';
import AppContext from './AppContext';
import Pivot from './Pivot';
import { Alert } from 'reactstrap';

export default () => {
  const [data, setData] = React.useState([]);
  const { expenseData } = React.useContext(AppContext);
  React.useEffect(() => {
      expenseData.getExpensesData(setData);
  },[]);

  return (
    <div>
    {
        data[0] !== undefined && data[0].description === "<Restricted data>"
        && <Alert color="warning"><b>NOTE:</b> You are not authorized to view the actual data. Sensitive data is masked and actual numbers have been artificially scaled.</Alert>
    }
    <Pivot title="Bill details" pivotprops={{
        aggregatorName:"Sum", 
        vals:["amount"], 
        rows:["date","category","description"], 
        }} />
   
</div>
  );
}
