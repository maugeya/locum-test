import useFetch from "../hooks/useFetch"

describe("testing useFetch works correctly", () => {
  const sampleData = {
    data: [{ id: "123", status: "FILLED" }],
  }

  const fetchMock = jest.fn().mockImplementation(() => {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        json: () => {
          return sampleData
        },
      })
    })
  })

  it("should store expected data in state if useFetch is successful", () => {})
})
