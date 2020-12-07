import React from 'react'
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import AppContext from './AppContext';
import { Card, CardHeader, CardBody, Spinner } from 'reactstrap';

/*
"valueFilter":{"weekId":{},"monthId":{"202010":true,"202011":true}}
*/
const Pivot = (props) => {
    const [data, setData] = React.useState([]);
    const [filters, setFilters] = React.useState([]);
    const { expenseData } = React.useContext(AppContext);
    // const setExpenseData = (data) => {
    //     setData(data);
    // }
    // React.useEffect(() => {
    //     expenseData.getExpensesData(setExpenseData);
    // },[]);
    const [state, setState] = React.useState(null);
    const updateState = (updatedState) => {
        const {data, ...filters} = {...updatedState};
        setFilters(filters);
        setState(updatedState);
    }  
    return (
        <Card>
            <CardHeader  className="bg-secondary text-white h5">{props.title}</CardHeader>
            <CardBody>
                {
                    expenseData.expenseData.length === 0 ? <Spinner color="primary"></Spinner>
                    : <PivotTableUI
                    data={expenseData.expenseData}
                    onChange={s => updateState(s)}
                    {...props.pivotprops}
                    {...state}
                    />
                }
                
            </CardBody>
        </Card>
    )
}

export default Pivot
