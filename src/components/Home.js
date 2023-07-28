import { Link } from "react-router-dom";
import restoFood from "../images/restauranfood.jpg";
import greekSalad from "../images/greek salad.jpg";
import lemonDessert from "../images/lemon dessert.jpg";
function Home() {
  return (
    <>
      <main>
        <section>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="text-color">
                <h1>Little Lemon Restaurant</h1>
                <h2>Chicago</h2>
                <p>
                  We are a family owned Mediterraneran restaurant,focused on
                  traditional recipes{" "}
                </p>
                <p>servred with a modern twist.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={restoFood}
                  width="200px"
                  height="200px"
                  alt="Little Lemon Image"
                  className="img-list"
                />
                <img
                  src={greekSalad}
                  width="200px"
                  height="200px"
                  alt="Greek Salad"
                  className="img-list"
                />
                <img
                  src={lemonDessert}
                  width="200px"
                  height="200px"
                  alt="Lemon Dessert"
                  className="img-list"
                />
              </div>
            </div>

            <Link to="/booking">
              <button aria-label="On Click" className="field-submit">
                Reserve Table
              </button>
            </Link>
            <Link to="/orderonline">
              <button aria-label="On Click" className="field-submit">
                Order Online
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
