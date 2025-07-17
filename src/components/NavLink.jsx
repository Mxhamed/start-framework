import { Link } from "react-router";

export default function NavLink({ goto, path }) {
  return (
    <li className={path === `/${goto}` ? "active" : ""}>
      <Link to={goto}>{goto}</Link>
    </li>
  );
}
