import React from 'react'

function Header({number,increment}) {
    console.log("Header componenti Re-rendered")
    return (
        <div>
          Header
          {number}
          <button onClick={increment}>Artır </button>
        </div>
    )
}
export default React.memo(Header);