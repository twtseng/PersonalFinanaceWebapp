import React from 'react'
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import AppContext from './AppContext';
import { Card, CardHeader, CardBody } from 'reactstrap';

const Pivot = () => {
    const [data, setData] = React.useState([]);
    const [last2MonthsData, setLast2MonthsData] = React.useState([]);
    const [filters, setFilters] = React.useState([]);
    const { expenseData } = React.useContext(AppContext);
    const setExpenseData = (data) => {
        setData(data);
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 35);
        const firstDay = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        const last2Month = data.filter(x => (new Date(x.date)) >= firstDay);
        console.log(last2Month);
        setLast2MonthsData(last2Month);
    }
    React.useEffect(() => {
        expenseData.getExpensesData(setExpenseData);
    },[]);
    const [state, setState] = React.useState(null);
    const updateState = (updatedState) => {
        const {data, ...filters} = {...updatedState};
        setFilters(filters);
        setState(updatedState);
    }
    const [state2, setState2] = React.useState(null);
    const updateState2 = (updatedState) => {
        const {data, ...filters} = {...updatedState};
        setState2(updatedState);
    }
    const [state3, setState3] = React.useState(null);
    const updateState3 = (updatedState) => {
        const {data, ...filters} = {...updatedState};
        setState3(updatedState);
    }   
    return (
        <div>
            <Card className="mb-4">
                <CardHeader className="bg-secondary text-white h5">Last 2 months</CardHeader>
                <CardBody>
                    <PivotTableUI
                        data={last2MonthsData}
                        onChange={s => updateState2(s)}
                        vals={["amount"]}
                        cols={["year","month","weekNum"]}
                        rows={["category"]}
                        aggregatorName={"Sum"}
                        {...state2}
                    />
                </CardBody>
            </Card>
            <Card className="mb-4">
                <CardHeader className="bg-secondary text-white h5">Monthly summary</CardHeader>
                <CardBody>
                    <PivotTableUI
                        data={data}
                        onChange={s => updateState3(s)}
                        vals={["amount"]}
                        cols={["year","month"]}
                        rows={["category"]}
                        aggregatorName={"Sum"}
                        {...state3}
                    />
                </CardBody>
            </Card>
            <Card>
                <CardHeader  className="bg-secondary text-white h5">Yearly summary</CardHeader>
                <CardBody>
                    <PivotTableUI
                        data={data}
                        onChange={s => updateState(s)}
                        vals={["amount"]}
                        cols={["year"]}
                        rows={["category"]}
                        aggregatorName={"Sum"}
                        {...state}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default Pivot
