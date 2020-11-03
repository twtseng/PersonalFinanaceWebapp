
import authService from './api-authorization/AuthorizeService';
export default class {
  constructor (setDataCallback) {
    this.expenseData = [];
  }
 
  getExpensesData(setDataCallback) {
    console.log("Running getExpensesData called")
    if (this.expenseData.length === 0) {
        console.log("Running getExpensesData getting the data")
        authService.getAccessToken()
        .then(authToken => fetch('FinanceData/Expenses', {
        headers: !authToken ? {} : { 'Authorization': `Bearer ${authToken}` }
        }))
        .then(response => response.json())
        .then(data => { this.expenseData = data; setDataCallback(this.expenseData);})
        .catch(err => console.log(`getExpensesData, err=${err}`));
    } else {
      setDataCallback(this.expenseData);
    }
  }
}