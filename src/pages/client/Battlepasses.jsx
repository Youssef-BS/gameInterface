import React, { useState, useEffect } from "react";
import axios from "axios";

const BattlePasses = () => {
  const [battlepasses, setSkins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/BattlePasses");
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
      {battlepasses.map((skin, index) => (
          <div key={skin._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src='https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg' alt='' className="card-image" />
            <div className="px-6 py-4">
              <h3 className="card-title">{skin.startDate}</h3>
              <p className="card-text">{skin.endDate}</p>
              <p className="card-text">{skin.status}</p>
              <button
                onClick={() => handleBuyClick(skin._id, skin.skinName, skin.skinPrice)}
                disabled={loading}
                className="btn-primary w-60 m-auto"
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

export default BattlePasses;
