import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import {
  SunIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import data from "../data/sugro-pagi.json";

export const SugroPagi = () => {
  // Initialize state for counting taps on each dzikir's icon
  const [counts, setCounts] = useState(() => Array(data.data.length).fill(0));
  const [showNumber, setShowNumber] = useState(() =>
    Array(data.data.length).fill(false)
  );

  // Function to handle icon click and increment the count
  const handleIconClick = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;

      // Show number on icon for a brief moment if count is less than repeat
      if (newCounts[index] <= data.data[index].repeat) {
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
        }, 1000); // Show number for 1 second
      }

      return newCounts;
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Almatsurat Sugro Pagi</title>
        <meta name="description" content="Almatsurat Sugro Pagi" />
        <meta name="keywords" content="Almatsurat Sugro Pagi" />
      </Helmet>
      {/* tampilkan matsurat */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        Al-Matsurat Sugro Pagi
        <SunIcon className="h-8 w-8 inline-block ml-2" />
      </h1>
      {data.data.map((item, index) => (
        <div key={index} className="mb-6 p-4 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          {item.arabic && (
            <p className="text-lg font-bold text-right text-gray-700">
              {item.arabic}
            </p>
          )}
          {item.latin && (
            <p className="text-gray-500 italic mt-1">{item.latin}</p>
          )}
          {item.translation && (
            <p className="text-gray-700 mt-1">{item.translation}</p>
          )}

          {/* Check if there are nested items (like Surat Al-Fātiḥah) */}
          {item.data && (
            <div className="mt-4 pl-4 border-l-2 border-gray-300">
              {item.data.map((subItem, subIndex) => (
                <div key={subIndex} className="mb-2">
                  <h3 className="text-lg font-medium">{subItem.title}</h3>
                  <p className="text-lg font-bold text-right text-gray-700">
                    {subItem.arabic}
                  </p>
                  <p className="text-gray-500 italic">{subItem.latin}</p>
                  <p className="text-gray-700">{subItem.translation}</p>
                </div>
              ))}
            </div>
          )}

          {/* Icon section for tap action */}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => handleIconClick(index)}
              className="flex flex-col items-center"
            >
              {showNumber[index] ? (
                <span className="h-10 w-10 flex items-center justify-center text-xl text-blue-500">
                  {counts[index]}
                </span>
              ) : counts[index] >= item.repeat ? (
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              ) : (
                <XCircleIcon className="h-10 w-10 text-gray-400" />
              )}
              <span className="mt-2 text-gray-600">
                Tap Count: {counts[index]} / {item.repeat}
              </span>
            </button>
          </div>
        </div>
      ))}
    </Layout>
  );
};
