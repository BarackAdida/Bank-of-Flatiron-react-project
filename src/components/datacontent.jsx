export function TableStructure () {
    return (
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <h3>The Royal Bank Of Flatiron</h3>
            <div>
                <input type="Text" placeholder="Search Your Recent Transactions"/>
                <i class='bx bx-search'></i>
            </div>
            <div>
                <input type="date" />
                <input type="text" placeholder="Movies" />
                <input type="text" placeholder="Cartegory"/>
                <input type="number" placeholder="Amount"/>
                <button>Add Transaction</button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Cartegory</th>
                        <th>Amount</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

