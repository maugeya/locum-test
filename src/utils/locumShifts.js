import moment from "moment"

import { POSTED_SHIFTS } from "../constants/constants"

export const filterShiftsForLocum = (locumShifts, locum) => {
  if (!locumShifts) {
    return []
  }
  const { staffTypeId } = locum

  return locumShifts.filter(
    (shift) =>
      parseInt(shift.staffTypeId) === parseInt(staffTypeId) &&
      shift.locum === null &&
      moment(shift.startDatetime).isAfter() &&
      shift.status === POSTED_SHIFTS
  )
}
