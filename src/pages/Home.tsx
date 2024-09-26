import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Al-Matsurat Online</title>
        <meta
          name="description"
          content="Al-Matsurat Online adalah aplikasi untuk membantu membaca Al-Matsurat setiap pagi dan petang"
        />
        <meta
          name="keywords"
          content="Al-Matsurat, Al-Matsurat Online, Al-Matsurat website, Al-Matsurat app, Al-Matsurat sugro, Al-Matsurat pagi, Al-Matsurat petang, Al-Matsurat kubro"
        />
      </Helmet>
      <h1 className="font-bold">Al-Matsurat Online</h1>
      <p>biasakan membaca almatsurat setiap pagi dan petang</p>
    </div>
  );
};
