import { Outlet, Link, useLocation } from "react-router";
import InfoSection from "./components/InfoSection";
import NavLink from "./components/NavLink";
import { useEffect } from "react";

export default function Layout() {
  const { pathname: path } = useLocation();

  const title =
    !path || path === "/" ? "Home" : path.at(1).toUpperCase() + path.slice(2);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <header>
        <Link to="">Start Framework</Link>
      </header>

      <nav>
        <ul>
          <NavLink path={path} goto="about" />
          <NavLink path={path} goto="portfolio" />
          <NavLink path={path} goto="contact" />
        </ul>
      </nav>

      <main className={title}>
        <Outlet />
      </main>

      <InfoSection />

      <footer>
        <p>
          &copy; Built and Improved by{" "}
          <a href="https://app.netlify.com/teams/mxhamedtamer/sites">
            Mohamed Tamer
          </a>
          <br />
          All Rights Reserved
        </p>
      </footer>
    </>
  );
}
