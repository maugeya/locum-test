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
  })
})
