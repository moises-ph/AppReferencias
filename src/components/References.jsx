import React from 'react'

function References(props) {
  return (
    <>
        {props.Refs.map((value, key) =>
            <h3 key={key}>{value}</h3>
        )}
    </>
  )
}

export default References