import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-4">
          {[
            { to: "home", title: "Home" },
            { to: "todos", title: "Todos" },
          ].map(({ to, title }) => (
            <li key={to}>
              <NavLink
                className={({ isActive }) =>
                  `hover:bg-slate-100 p-1 ${isActive ? "underline" : ""}`
                }
                to={to}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
