import React, { Component } from 'react';

import authService from './api-authorization/AuthorizeService'

export class BillDetails extends Component {
  static displayName = BillDetails.name;

  constructor(props) {
    super(props);
    this.state = { billData: [], loading: true };
  }

  componentDidMount() {
    this.populateBillDetailsData();
  }

  static renderBillDetailsTable(billData) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>WeekNum</th>
            <th>Source</th>
            <th>Bucket</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {billData.map(x => (
            <tr>
              <td>{x.date}</td>
              <td>{x.weekNum}</td>
              <td>{x.source}</td>
              <td>{x.bucket}</td>
              <td>{x.description}</td>
              <td>{x.amount}</td>
            </tr>
            ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : BillDetails.renderBillDetailsTable(this.state.billData);

    return (
      <div>
        <h1 id="tabelLabel" >Bill Details</h1>
        <p>Retrieving bill data</p>
        {contents}
      </div>
    );
  }

  async populateBillDetailsData() {
    const token = await authService.getAccessToken();
    const response = await fetch('FinanceData/Bills', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({ billData: data, loading: false });
  }
}
