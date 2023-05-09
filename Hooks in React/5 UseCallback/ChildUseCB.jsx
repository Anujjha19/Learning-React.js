import React, { memo } from 'react'

const Child = ( {counterTwo, setCounterTwo}) => {
    console.log('Child C Render ')
    return (
        <div>

        <h1> Child Component </h1>

        </div>
    )
}

export default memo(Child)


/* WAY 1  

import React, { memo } from 'react'
export default memo(Child)

*/