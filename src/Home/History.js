import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
function History({ historyList }) {
    const [hListDetails, setHistoryList] = useState(historyList);
    var TotalEarnedPoints = 0;
    useEffect(
        () => {
            setHistoryList(historyList);
        },
        [historyList]
    );
    return (
        <>
            <table className="table table-striped table-dark mt-1">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">No.of items</th>
                        <th scope="col">TotalAmount</th>
                        <th scope="col">EarnedPoints</th>
                    </tr>
                </thead>
                <tbody>
                    {historyList.map((item) => {
                        TotalEarnedPoints += parseInt(item.earnedPoints);
                        return <tr>
                            <th scope="row">{item.purchaseDate}</th>
                            <td>{item.totalItems}</td>
                            <td>{item.totalAmount}</td>
                            <td>{item.earnedPoints}</td>
                        </tr>
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" align='right'>Total EarnedPoints :</td>
                        <td> {TotalEarnedPoints}</td>
                    </tr>
                </tfoot>
            </table>

        </>
    );
}
const mapStateToProps = (state) => {
    return {
        historyList: state.historyDetails,

    }
}
export default connect(mapStateToProps, null)(History);
