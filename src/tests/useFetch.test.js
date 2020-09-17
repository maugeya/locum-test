import { renderHook } from "@testing-library/react-hooks"

import useFetch from "../hooks/useFetch"

describe("testing useFetch works correctly", () => {
  const URL = "/locum-shifts"

  const SAMPLE_DATA = {
    data: [{ id: "123", status: "FILLED" }],
  }

  const fetchMock = jest.fn().mockImplementation(() => {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        json: () => {
          return SAMPLE_DATA
        },
      })
    })
  })

  it("should store expected data in state if useFetch is successful", async () => {
    jest.spyOn(global, "fetch").mockImplementation(fetchMock)

    const { result, waitForNextUpdate } = renderHook(() => useFetch(URL))

    await waitForNextUpdate()

    expect(result.current.data).toEqual(SAMPLE_DATA)
    expect(result.current.error).toEqual([])
    expect(result.current.isLoading).toEqual(false)
  })

  it("Should store error message in state if useFetch promise is rejected", async () => {
    const errorMessage = "Testing Error"

    jest.spyOn(global, "fetch").mockRejectedValue(new Error(errorMessage))

    const { result, waitForNextUpdate } = renderHook(() => useFetch(URL))

    await waitForNextUpdate()

    expect(result.current.error.message).toEqual(errorMessage)
    expect(result.current.data).toEqual([])
    expect(result.current.isLoading).toEqual(false)
  })

  // it("Should store in state that data is loading", () => {
  //   const url = "/locum-shifts/"

  //   jest.spyOn(global, "fetch").mockImplementation(fetchMock)

  //   const { result } = renderHook(() => useFetch(url))

  //   expect(result.current.isLoading).toEqual(true)
  //   expect(result.current.data).toEqual([])
  //   expect(result.current.error).toEqual([])
  // })
})
