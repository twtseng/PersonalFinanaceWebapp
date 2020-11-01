import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import Select from 'react-select';
import useBillsData from './useBillsData';

export default () => {
  const billsData = useBillsData();
  const [yearFilter, setYearFilter] = React.useState(null);
  const [monthFilter, setMonthFilter] = React.useState(null);
  const [weekFilter, setWeekFilter] = React.useState(null);
  const yearOptions = billsData.years.map((x) => ({ value: x, label: x }));
  const monthOptions = billsData.months.map((x) => ({ value: x, label: x }));
  const weekOptions = billsData.weeks.map((x) => ({ value: x, label: x }));
  const [filteredBills, setFilteredBills] = React.useState([]);
  const [totalsByCategory, setTotalsByCategory] = React.useState({});
  React.useEffect(() => {
    // Filter on dates
    const yearsSelected = yearFilter === null ? billsData.years : yearFilter.map(x => x.value);
    const monthsSelected = monthFilter === null ? billsData.months : monthFilter.map(x => x.value);
    const weeksSelected = weekFilter === null ? billsData.weeks : weekFilter.map(x => x.value);
    console.log(`yearsSelected:${yearsSelected} monthsSelected:${monthsSelected} weeksSelected:${weeksSelected}`);
    const newFilteredBills = [];
    billsData.bills.forEach(bill => {
      if (yearsSelected.includes(bill.year) && monthsSelected.includes(bill.month) && weeksSelected.includes(bill.weekNum)) {
        newFilteredBills.push(bill);
      }
    })
    setFilteredBills(newFilteredBills);

    // Calculate totals 
    const newTotalsByCategory = {};
    newFilteredBills.forEach(bill => {
      if (bill.bucket in newTotalsByCategory) {
        newTotalsByCategory[bill.bucket] += bill.amount;
      } else {
        newTotalsByCategory[bill.bucket] = bill.amount;
      }
    });
    setTotalsByCategory(newTotalsByCategory);
  },[yearFilter, monthFilter, weekFilter])
 
  return (
    <div className="d-flex">
      <Card className="col-9 mr-4">
        <Card>
          <CardHeader tag="h3">Totals</CardHeader>
          <CardBody>
            <table className='table table-striped' aria-labelledby="tabelLabel">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(totalsByCategory).map(x => (
                  <tr>
                    <td>{x}</td>
                    <td>{totalsByCategory[x]}</td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card>
          <CardHeader tag="h3">Details</CardHeader>
          <CardBody>
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
                {filteredBills.map(x => (
                  <tr>
                    <td>{x.dateString}</td>
                    <td>{x.weekNum}</td>
                    <td>{x.source}</td>
                    <td>{x.bucket}</td>
                    <td>{x.description}</td>
                    <td>{x.amount}</td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Card>
      <Card className="col-3">
        <CardHeader>Filters</CardHeader>
        <CardBody>
          <div className="form-group">
            <label for="year">Year</label>
            <Select id="year" options={yearOptions} isMulti onChange={newFilter => setYearFilter(newFilter)}></Select>
          </div>
          <div className="form-group">
            <label for="month">Month</label>
            <Select id="month" options={monthOptions} isMulti onChange={newFilter => setMonthFilter(newFilter)} ></Select>
          </div>
          <div className="form-group">
            <label for="week">Week</label>
            <Select id="week" options={weekOptions} isMulti onChange={newFilter => setWeekFilter(newFilter)} ></Select>
          </div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

