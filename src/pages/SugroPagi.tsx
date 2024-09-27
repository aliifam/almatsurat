import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";

export const SugroPagi = () => {
  return (
    <Layout>
      <Helmet>
        <title>Almatsurat Sugro Pagi</title>
        <meta name="description" content="Almatsurat Sugro Pagi" />
        <meta name="keywords" content="Almatsurat Sugro Pagi" />
      </Helmet>
      <p>Sugro Pagi</p>
    </Layout>
  );
};
