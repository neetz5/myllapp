import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import LoginSign from "./LoginSign.js";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
function Main() {
  //   const [availableTimes, setAvailableTimes] = useState([
  //     "17:00",
  //     "18:00",
  //     "19:00",
  //     "20:00",
  //     "21:00",
  //     "22:00",
  //   ]);
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const updateTimes = (state, date) => {
    return { availableTimes: fetchAPI(new Date(date)) };
  };
  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/bookingConfirmation");
    }
  }
  //   const initializeTimes = () => {
  //     return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  //   };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <main
      style={{
        backgroundColor: "#495E57",
        position: "relative",
        // top: "3rem",
        minHeight: "90vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/orderonline" element={<OrderOnline />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/loginSignUp" element={<LoginSign />}></Route>
        <Route
          path="/bookingConfirmation"
          element={<ConfirmedBooking />}
        ></Route>
      </Routes>
    </main>
  );
}
export default Main;
