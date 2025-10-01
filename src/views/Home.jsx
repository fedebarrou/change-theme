import { useTheme } from "../ThemeContext";
import Header from "../components/Header"

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="page">

      <Header></Header>

      <h1>Home</h1>

      <button className="btn" onClick={toggleTheme}>
        Cambiar a {theme === "dark" ? "light" : "dark"}
      </button>

      <section className="card" style={{ marginTop: 16 }}>
        <b>Card de ejemplo</b>
        <p style={{ color: "var(--muted)" }}>
          Este bloque usa tokens del tema (sin inline de colores).
        </p>
      </section>
    </main>
  );
};

export default Home;
