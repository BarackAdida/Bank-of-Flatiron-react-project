import React from "react"
import './style.css'
import './script.js'
// import { submitButton, inputField } '.../script.js'

export function TableStructure () {
    return (
        <div>
            <script src="script.js"></script>
            <link rel="stylesheet" href="styles.css"></link>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div id="headdiv"><h3>The Royal Bank Of Flatiron</h3></div>
            <div id='div1'>
                <input type="Text" placeholder="Search Your Recent Transactions"/>
                <button><i class='bx bx-search'></i></button>
            </div>
            <div id='div2'>
                <input class="inputField" type="date" />
                <input class="inputField" type="text" placeholder="Description" />
                <input class="inputField" type="text" placeholder="Cartegory"/>
                <input class="inputField" type="number" placeholder="Amount"/>
                <div id="buttondiv">
                    <button id="submitButton" disabled>Add Transaction</button>
                </div>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Cartegory</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>06/23/2024</td>
                        <td>Movie</td>
                        <td>Entertainment</td>
                        <td>100</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

