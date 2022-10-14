import React from 'react'

const RowContentLine = ({rowData}) => {
  const {date, submittedBy, status, text} = rowData

  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '20%', overflowWrap: 'anywhere', padding: '5px'}}>{date}</div>
      <div style={{width: '20%', overflowWrap: 'anywhere', padding: '5px'}}>{submittedBy}</div>
      <div style={{width: '10%', overflowWrap: 'anywhere', padding: '5px'}}>{status}</div>
      <div style={{width: '50%', overflowWrap: 'anywhere', padding: '5px'}}>{text}</div>
    </div>
  )

}

export default RowContentLine