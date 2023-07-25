import React, { useState } from "react";
function BookingPage(props) {
  console.log("props", props);
  const { availableTimes, dispatch, submitForm } = props;
  console.log("availableTimes", props.availableTimes);
  const [bookingValues, setBooking] = useState({
    bookingDate: "2023-07-24",
    bookingTime: "17:00",
    bookedGuests: "2",
    bookingOccasion: "Anniversary",
  });
  //   const [availableTimes, useAvailableTimes] = useState([
  //     "17:00",
  //     "18:00",
  //     "19:00",
  //     "20:00",
  //     "21:00",
  //     "22:00",
  //   ]);
  const dateHandler = (e) => {
    //  bookingValues.bookingDate = e.target.value;
    setBooking((prevBooking) => ({
      ...prevBooking,
      bookingDate: e.target.value,
    }));
    dispatch(e); //{ type: "updated_time", payload: e.target.value });
  };
  const timeHandler = (e) => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      bookingTime: e.target.value,
    }));
  };
  const guestHandler = (e) => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      bookedGuests: e.target.value,
    }));
  };
  const occasionHandler = (e) => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      bookingOccasion: e.target.value,
    }));
  };
  const reservationHandler = (e) => {
    e.preventDefault();
    submitForm(e);
    console.log(bookingValues);
  };
  return (
    <div>
      <h1>Book Now</h1>
      <form onSubmit={reservationHandler}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={dateHandler}
          value={bookingValues.bookingDate}
        ></input>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          placeholder="10;00"
          onChange={timeHandler}
          value={bookingValues.bookingTime}
        >
          {availableTimes.availableTimes.map((times) => {
            return <option key={times}>{times}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={guestHandler}
          value={bookingValues.bookedGuests}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={occasionHandler}
          value={bookingValues.bookingOccasion}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          aria-label="submitBtn"
          //  onClick={reservationHandler}
        />
      </form>
    </div>
  );
}
export default BookingPage;
