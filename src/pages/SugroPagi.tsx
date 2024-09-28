import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import data from "../data/sugro-pagi.json";
import DzikirItem from "../components/DzikirItem";
import { DzikirItemType } from "../types/types";
import ShareButton from "../components/ShareButton";
import BackToTopButton from "../components/BackToTop";

export const SugroPagi = () => {
  const dzikirData: DzikirItemType[] = data.data; // Tipe data untuk dzikir
  const [counts, setCounts] = useState(() => Array(dzikirData.length).fill(0));
  const [showNumber, setShowNumber] = useState(() =>
    Array(dzikirData.length).fill(false)
  );

  const handleIconClick = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;

      if (newCounts[index] <= dzikirData[index].repeat) {
        setShowNumber((prevShow) => {
          const newShow = [...prevShow];
          newShow[index] = true;
          return newShow;
        });

        setTimeout(() => {
          setShowNumber((prevShow) => {
            const newShow = [...prevShow];
            newShow[index] = false;
            return newShow;
          });
        }, 200);
      }

      return newCounts;
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content="Almatsurat Sugro Pagi" />
        <meta name="keywords" content="Almatsurat Sugro Pagi" />
      </Helmet>
      <h1 className="flex items-center justify-center text-3xl font-bold mb-4">
        {data.title}
      </h1>
      <div className="flex items-center justify-center">
        <ShareButton />
      </div>

      {dzikirData.map((item, index) => (
        <DzikirItem
          key={index}
          item={item}
          index={index}
          counts={counts}
          showNumber={showNumber}
          onIconClick={handleIconClick}
        />
      ))}
      <BackToTopButton />
    </Layout>
  );
};
