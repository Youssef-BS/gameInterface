import React, { useState, useEffect } from "react";
import axios from "axios";

const Skins = () => {
  const [skins, setSkins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/Skins");
        setSkins(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBuyClick = async (skinId, skinName, skinPrice) => {
    // Implement your buy functionality here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skins.map((skin) => (
          <div key={skin._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src='https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg' alt="" className="w-full h-56 object-cover object-center" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skin.skinName}</h3>
              <p className="text-gray-600 text-sm">{skin.skinRarity}</p>
              <p className="text-gray-700 font-bold mt-2">${skin.skinPrice}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button
                onClick={() => handleBuyClick(skin._id, skin.skinName, skin.skinPrice)}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
              >
                {loading ? 'Processing...' : 'Buy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skins;
