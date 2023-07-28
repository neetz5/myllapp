import { Link } from "react-router-dom";
import bruschetta from "../images/bruchetta.svg";
import restoFood from "../images/restauranfood.jpg";
function Home() {
  return (
    <>
      <main>
        <section>
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <h1>Little Lemon Restaurant</h1>
                <h2>Chicago</h2>
                <p>
                  We are a family owned Mediterraneran restaurant, focused on
                  traditional recipes servred with a modern twist.
                </p>
              </div>
              <div>
                <img
                  src={restoFood}
                  width="200px"
                  height="200px"
                  alt="Little Lemon Image"
                />
              </div>
            </div>

            <Link to="/booking">
              <button aria-label="On Click">Reserve Table</button>
            </Link>
            <Link to="/orderonline">
              <button aria-label="On Click">Order Online</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
