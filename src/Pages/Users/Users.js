import React from 'react';
import './Users.scss';

const Users = () => {
  return (
    <div id="dashboard-wrapper">
      <table>
        <thead>
          <tr>
            <th width="8%" scope="col">
              Sr. No.
            </th>
            <th scope="col">Base Name</th>
            <th scope="col">Specification</th>
            <th width="12%" scope="col">
              Base Price
            </th>
            <th width="12%" scope="col">
              Order No.
            </th>
            <th width="8%" scope="col">
              Status
            </th>
            <th scope="col">Create Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account">01</td>
            <td data-label="Due Date">Jacket / Blazer</td>
            <td data-label="Amount">Next Business Day Deliver</td>
            <td data-label="Period">6.00</td>
            <td data-label="Period">12345</td>
            <td data-label="Period">1</td>
            <td data-label="Period">01/15/2020</td>
          </tr>
          <tr>
            <td data-label="Account">02</td>
            <td data-label="Due Date">Jacket / Blazer</td>
            <td data-label="Amount">Next Business Day Deliver</td>
            <td data-label="Period">6.00</td>
            <td data-label="Period">12345</td>
            <td data-label="Period">1</td>
            <td data-label="Period">01/15/2020</td>
          </tr>
          <tr>
            <td data-label="Account">03</td>
            <td data-label="Due Date">Jacket / Blazer</td>
            <td data-label="Amount">Next Business Day Deliver</td>
            <td data-label="Period">6.00</td>
            <td data-label="Period">12345</td>
            <td data-label="Period">1</td>
            <td data-label="Period">01/15/2020</td>
          </tr>
          <tr>
            <td data-label="Account">04</td>
            <td data-label="Due Date">Jacket / Blazer</td>
            <td data-label="Amount">Next Business Day Deliver</td>
            <td data-label="Period">6.00</td>
            <td data-label="Period">12345</td>
            <td data-label="Period">1</td>
            <td data-label="Period">01/15/2020</td>
          </tr>
          <tr>
            <td data-label="Account">05</td>
            <td data-label="Due Date">Jacket / Blazer</td>
            <td data-label="Amount">Next Business Day Deliver</td>
            <td data-label="Period">6.00</td>
            <td data-label="Period">12345</td>
            <td data-label="Period">1</td>
            <td data-label="Period">01/15/2020</td>
          </tr>
          <tr>
            <td data-label="Account">06</td>
            <td data-label="Due Date">Jacket / Blazer</td>
            <td data-label="Amount">Next Business Day Deliver</td>
            <td data-label="Period">6.00</td>
            <td data-label="Period">12345</td>
            <td data-label="Period">1</td>
            <td data-label="Period">01/15/2020</td>
          </tr>
          <tr>
            <td data-label="Account">07</td>
            <td data-label="Due Date">Jacket / Blazer</td>
            <td data-label="Amount">Next Business Day Deliver</td>
            <td data-label="Period">6.00</td>
            <td data-label="Period">12345</td>
            <td data-label="Period">1</td>
            <td data-label="Period">01/15/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
