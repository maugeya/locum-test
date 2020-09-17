import React from "react"

import styles from "./LocumShiftList.module.css"
import useFetch from "../hooks/useFetch"
import LocumShift from "./LocumShift"
import { filterShiftsForLocum } from "../utils/locumShifts"

const LocumShiftList = ({ locum }) => {
  const { data, isLoading, error } = useFetch(
    "https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions"
  )

  const allShifts = data.data

  const shiftsAvailableForLocum = filterShiftsForLocum(allShifts, locum)

  if (isLoading) {
    return <div>LOADING...</div>
  }

  if (error.length) {
    return error.map((e) => <div>{e.message}</div>)
  }
  return (
    <div className={styles.container}>
      {shiftsAvailableForLocum.map((shift, i) => (
        <LocumShift key={i} locumShift={shift} />
      ))}
    </div>
  )
}

export default LocumShiftList
