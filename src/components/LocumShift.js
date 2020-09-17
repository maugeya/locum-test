import React from "react"
import moment from "moment"

import styles from "./LocumShift.module.css"

const LocumShift = ({ locumShift }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.cardHeader}>{locumShift.practice.name}</h2>
      </div>
      <div className={styles.shiftDetails}>
        <div>
          Date: {moment(locumShift.startDatetime).format("MMMM do YYYY")}
        </div>
        <div>
          Start Time: {moment(locumShift.startDatetime).format("HH:mm")}
        </div>
        <div>End Time: {moment(locumShift.endDatetime).format("HH:mm")}</div>
        <div>Hourly Rate: £{locumShift.hourlyRate}</div>
      </div>
    </div>
  )
}

export default LocumShift
