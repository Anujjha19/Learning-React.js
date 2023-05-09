import React from "react";

const styles = {
    height: '30%',
    width: '30%',
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    color: "black"
}

function List() {
    return (<ol style={styles} >
        <li> C++ DSA </li>
        <li> React.js </li>
        <li> JavaScript </li>
        <li> BackEnd </li>
    </ol>

    );

}

export default List;