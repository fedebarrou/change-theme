import { useTheme } from "../ThemeContext";
import Header from "../components/Header";

const Profile = () => {
  const { theme } = useTheme();
  return (
    <main style={{ padding: 24 }}>

      <Header></Header>

      <p>Theme seleccionado: <b>{theme}</b></p>
    </main>
  );
};

export default Profile;
