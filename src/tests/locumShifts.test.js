import { filterShiftsForLocum } from "../utils/locumShifts"

describe("testing filterShiftsForLocum", () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  const futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + 8)

  const SAMPLE_SHIFTS = [
    {
      startDatetime: yesterday,
      staffType: "gp",
      staffTypeId: "1",
      locum: null,
      status: "POSTED",
    },
    {
      startDatetime: futureDate,
      staffType: "gp",
      staffTypeId: "1",
      locum: null,
      status: "POSTED",
    },
    {
      startDatetime: futureDate,
      staffType: "gp",
      staffTypeId: "1",
      locum: null,
      status: "DRAFT",
    },
    {
      startDatetime: futureDate,
      staffType: "gp",
      staffTypeId: "1",
      locum: {
        id: "2222",
        firstName: "Foo",
        lastName: "Bar",
      },
      status: "POSTED",
    },
    {
      startDatetime: futureDate,
      staffType: "Clinical Parmacist",
      staffTypeId: "3",
      locum: null,
      status: "POSTED",
    },
  ]

  const TEST_LOCUM = {
    id: "1111",
    firstName: "Tina",
    lastName: "Turner",
    staffType: "gp",
    staffTypeId: "1",
  }

  it("should filter out all instances of shifts in the past", () => {
    const test_shifts = [SAMPLE_SHIFTS[0], SAMPLE_SHIFTS[1]]
    const availableFutureShifts = filterShiftsForLocum(test_shifts, TEST_LOCUM)

    expect(availableFutureShifts).toHaveLength(1)
    expect(availableFutureShifts).toStrictEqual([SAMPLE_SHIFTS[1]])
  })

  it("should filter out all instances of shifts where locum is not null", () => {
    const test_shifts = [SAMPLE_SHIFTS[1], SAMPLE_SHIFTS[3]]
    const availableFutureShifts = filterShiftsForLocum(test_shifts, TEST_LOCUM)

    expect(availableFutureShifts).toHaveLength(1)
    expect(availableFutureShifts).toStrictEqual([SAMPLE_SHIFTS[1]])
  })

  it("should filter out all instances of shifts where staffType does not match test locum", () => {
    const test_shifts = [SAMPLE_SHIFTS[1], SAMPLE_SHIFTS[4]]
    const availableFutureShifts = filterShiftsForLocum(test_shifts, TEST_LOCUM)

    expect(availableFutureShifts).toHaveLength(1)
    expect(availableFutureShifts).toStrictEqual([SAMPLE_SHIFTS[1]])
  })

  it("should filter out all instances of shifts where status is not posted", () => {
    const test_shifts = [SAMPLE_SHIFTS[1], SAMPLE_SHIFTS[2]]
    const availableFutureShifts = filterShiftsForLocum(test_shifts, TEST_LOCUM)

    expect(availableFutureShifts).toHaveLength(1)
    expect(availableFutureShifts).toStrictEqual([SAMPLE_SHIFTS[1]])
  })
})
