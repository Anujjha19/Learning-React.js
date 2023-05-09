import React from 'react';

const ToDOList = (props) => {

    return (
        <div className='todo-style'>
            < i className='fa fa-times' aria-hidden="true"

                onClick={() => {
                    props.onSelect(props.id)
                }}
            />
            {/* onClick={props.onSelect(props.id)} */}
            <li> {props.text}</li>
        </div>
    )
}

export default ToDOList;
