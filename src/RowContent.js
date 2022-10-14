import React from 'react'

const RowContent = ({rowData}) => {
  const {date, submittedBy, status, text} = rowData

  return (
    <div>
      <div>{date}</div>
      <div>{submittedBy}</div>
      <div>{status}</div>
      <div>{text}</div>
    </div>
  )

}

export default RowContent