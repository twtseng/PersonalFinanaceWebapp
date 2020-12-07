import React from 'react'
import 'react-pivottable/pivottable.css';
import AppContext from './AppContext';
import Pivot from './Pivot';

/*
"valueFilter":{"weekId":{},"monthId":{"202010":true,"202011":true}}
*/
const PivotView = () => {
    const [data, setData] = React.useState([]);
    const [last2MonthsData, setLast2MonthsData] = React.useState([]);
    const [filters, setFilters] = React.useState([]);
    const { expenseData } = React.useContext(AppContext);
    const setExpenseData = (data) => {
        setData(data);
        // TODO: Set the filters for the week and monthly 
    }
    React.useEffect(() => {
        expenseData.getExpensesData(setExpenseData);
    },[]);

    return (
        <div>
            <Pivot title="Weekie" pivotprops={{aggregatorName:"Sum", vals:["amount"], cols:["year","month","weeknum"], rows:["category"]}} />
            <Pivot title="Month long summary" pivotprops={{aggregatorName:"Sum", vals:["amount"], cols:["year","month"], rows:["category"]}} />
            <Pivot title="Year long summary" pivotprops={{aggregatorName:"Sum", vals:["amount"], cols:["year"], rows:["category"]}} />
           
        </div>
    )
}

export default PivotView
