import React from 'react'
import 'react-pivottable/pivottable.css';
import { Alert } from 'reactstrap';
import AppContext from './AppContext';
import Pivot from './Pivot';

/*
"valueFilter":{"weekId":{},"monthId":{"202010":true,"202011":true}}
*/
const PivotView = () => {
    const [data, setData] = React.useState([]);
    const [last2MonthFilter, setLast2MonthFilter] = React.useState({});
    const [lastYearFilter, setLastYearFilter] = React.useState({});
    const [filters, setFilters] = React.useState([]);
    const { expenseData } = React.useContext(AppContext);
    const setExpenseData = (data) => {
        setData(data);
        // Set the filters for the week and monthly
        const monthHash = {};
        data.forEach(x => monthHash[x.monthId] = x.monthId);
        const months = Object.keys(monthHash);
        let twoMonthFilter = {};
        let oneYearFilter = {};
        for(let i = 0; i < months.length; ++i) {
            if (i < months.length - 2) {
                twoMonthFilter[months[i]] = true;
            }
            if (i < months.length - 12) {
                oneYearFilter[months[i]] = true;
            }
        }
        setLast2MonthFilter(twoMonthFilter);
        setLastYearFilter(oneYearFilter);
        console.log(JSON.stringify(data));
        console.log(`twoMonthFilter: ${JSON.stringify(twoMonthFilter)}`);
        console.log(`oneYearFilter: ${JSON.stringify(oneYearFilter)}`);
    }
    React.useEffect(() => {
        expenseData.getExpensesData(setExpenseData);
    },[]);

    return (
        <div>
            {
                data[0] !== undefined && data[0].description === "<Restricted data>"
                && <Alert color="warning"><b>NOTE:</b> You are not authorized to view the actual data. Sensitive data is masked and actual numbers have been artificially scaled.</Alert>
            }
            <Pivot title="Past 2 months" pivotprops={{
                aggregatorName:"Sum", 
                vals:["amount"], 
                cols:["year","month","weekNum"], 
                rows:["category"],
                valueFilter:{"monthId":last2MonthFilter}
                }} />
            <Pivot title="Past year" pivotprops={{
                aggregatorName:"Sum", 
                vals:["amount"], 
                cols:["year","month"], 
                rows:["category"], 
                valueFilter:{"monthId":lastYearFilter}}} />
            <Pivot title="Year long summary" pivotprops={{
                aggregatorName:"Sum", 
                vals:["amount"], 
                cols:["year"], 
                rows:["category"]}} />
           
        </div>
    )
}

export default PivotView
