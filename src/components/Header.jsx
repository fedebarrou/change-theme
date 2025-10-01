import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <style>{`
        .app-header{position:sticky;top:0;z-index:50;background:var(--card);border-bottom:1px solid var(--border);backdrop-filter:blur(6px)}
        .nav{max-width:1100px;margin:0 auto;height:56px;display:flex;align-items:center;justify-content:center;gap:8px;padding:0 16px}
        .nav-links{display:flex;gap:8px;list-style:none;margin:0;padding:0}
        .nav-link{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:10px;text-decoration:none;color:var(--fg);border:1px solid transparent;transition:background-color .15s,border-color .15s}
        .nav-link:hover{background:rgba(127,127,127,.06);border-color:var(--border)}
        .nav-link.active{background:var(--fg);color:var(--btn-fg);border-color:var(--fg)}
      `}</style>

      <header className="app-header">
        <nav className="nav" aria-label="Navegación principal">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/perfil"
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Perfil
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
