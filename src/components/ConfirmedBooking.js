import marioAdrianBooking from "../images/Mario and Adrian b.jpg";
function ConfirmedBooking() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ paddingLeft: "40vh", color: "white" }}>Booking Confirmed</h1>
      <img
        src={marioAdrianBooking}
        alt="booking confirmed"
        width="700px"
        height="500px"
        style={{ margin: "0 10em" }}
      />
    </div>
  );
}
export default ConfirmedBooking;
