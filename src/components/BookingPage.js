import React, { useState } from "react";
import "../App.css";
function BookingPage(props) {
  console.log("props", props);
  const { availableTimes, dispatch, submitForm } = props;
  console.log("availableTimes", props.availableTimes);
  const [bookingValues, setBooking] = useState({
    bookingDate: "", //"2023-07-24",
    bookingTime: "", //"17:00",
    bookedGuests: "", //"2",
    bookingOccasion: "", //"Anniversary",
  });
  const [errors, setErrors] = useState("");
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
    //  dispatch(e);
    //  dispatch({ type: "updated_time", payload: e.target.value });
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
    setErrors("");
    if (!bookingValues.bookingDate || bookingValues.bookingDate === "") {
      errors.bookingDate = "Enter a future date";
    } else if (!bookingValues.bookedGuests || bookingValues.bookedGuests < 1) {
      errors.bookedGuests = "Minimum guests should be 1";
    }
    //  else if (!bookingValues.bookingTime || bookingValues.bookingTime < 1) {
    //    errors.bookedGuests = "Select a booking time";
    //  }
    submitForm(e);
    console.log(bookingValues);
  };
  return (
    <div style={{ display: "flex", minHeight: "90vh" }} className="form-bg">
      {/*<div>
        <h1
          style={{
            color: "#495E57",
            paddingLeft: "45vh",
          }}
        >
          Book your Reservations
        </h1>
      </div> */}
      <section>
        <form onSubmit={reservationHandler}>
          <fieldset
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 12rem",
              padding: "2rem",
              backgroundColor: "rgb(244 206 20 / 59%)",
              height: "fit-content",
              position: "absolute",
              bottom: "10vh",
              left: "40vh",
              border: "3px solid #495E57",
              borderRadius: "2rem",
            }}
          >
            <h1>Book your Reservations</h1>
            <>
              <label htmlFor="res-date" className="label-color">
                Choose date
              </label>
              <input
                type="date"
                id="res-date"
                onChange={dateHandler}
                value={bookingValues.bookingDate}
                required
                className="field-submit"
              ></input>
              {errors.bookingDate && <p>{errors.bookingDate}</p>}
            </>
            <>
              <label htmlFor="res-time" className="label-color">
                Choose time
              </label>
              <select
                id="res-time "
                placeholder="10;00"
                onChange={timeHandler}
                value={bookingValues.bookingTime}
                required
                className="field-submit"
              >
                {availableTimes.availableTimes.map((times) => {
                  return <option key={times}>{times}</option>;
                })}
              </select>
            </>
            <>
              <label htmlFor="guests" className="label-color">
                Number of guests
              </label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                onChange={guestHandler}
                value={bookingValues.bookedGuests}
                required
                className="field-submit"
              />
            </>
            <>
              <label htmlFor="occasion" className="label-color">
                Occasion
              </label>
              <select
                id="occasion"
                onChange={occasionHandler}
                value={bookingValues.bookingOccasion}
                required
                className="field-submit"
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </>
            <input
              type="submit"
              value="Confirm Reservation"
              aria-label="On Click"
              disabled={errors}
              className="submit-btn"
              //  onClick={reservationHandler}
            />
          </fieldset>
        </form>
      </section>
    </div>
  );
}
export default BookingPage;
