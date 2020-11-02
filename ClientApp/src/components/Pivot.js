import React from 'react'
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import useExpensesData from './useExpensesData';

const Pivot = () => {
    const expensesData = useExpensesData();
    const [state, setState] = React.useState(null);
    return (
        <div>
            <PivotTableUI
                data={expensesData}
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
