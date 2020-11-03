import React from 'react';
import AppContext from './AppContext';

const Test = () => {
    const [data, setData] = React.useState([]);
    const { expenseData } = React.useContext(AppContext);
    React.useEffect(() => {
        expenseData.getExpensesData(setData);
    },[]);
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default Test
