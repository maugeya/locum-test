import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders a header for the page", () => {
  const { getByText } = render(<App />)
  const pageHeader = getByText(/Available locum shifts/i)
  expect(pageHeader).toBeInTheDocument()
})
