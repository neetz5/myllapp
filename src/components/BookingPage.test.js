import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingPage from "./BookingPage";
const availableTimings = { availableTimes: ["17:00", "18:00", "19:00"] };
const updateTimes = jest.fn();

test("Renders the BookingPage heading", () => {
  render(<BookingPage availableTimes={availableTimings} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Check the returned value from initializeTimes function", () => {
  render(<BookingPage availableTimes={availableTimings} />);
  const optionName = screen.getByPlaceholderText("1");
  fireEvent.change(optionName, { target: { value: "2" } });
});
