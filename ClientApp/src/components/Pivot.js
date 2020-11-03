import React from 'react'
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import AppContext from './AppContext';

const Pivot = () => {
    const [data, setData] = React.useState([]);
    const { expenseData } = React.useContext(AppContext);
    React.useEffect(() => {
        expenseData.getExpensesData(setData);
    },[]);
    const [state, setState] = React.useState(null);
    return (
        <div>
            <PivotTableUI
                data={data}
                onChange={s => setState(s)}
                vals={["amount"]}
                cols={["year"]}
                rows={["category"]}
                aggregatorName={"Sum"}
                {...state}
            />
        </div>
    )
}

export default Pivot
