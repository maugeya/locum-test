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
          <p>Date: {moment(locumShift.startDatetime).format("MMMM do YYYY")}</p>
        </div>
        <div>
          <p>Start Time: {moment(locumShift.startDatetime).format("HH:mm")}</p>
        </div>
        <div>
          <p>End Time: {moment(locumShift.endDatetime).format("HH:mm")}</p>
        </div>
        <div>
          <p>Hourly Rate: £{locumShift.hourlyRate}</p>
        </div>
        <div>
          <p>Total of applications: {locumShift.applicationIds.length}</p>
        </div>
      </div>
    </div>
  )
}

export default LocumShift
