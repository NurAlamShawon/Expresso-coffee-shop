import React, { useEffect, useState } from "react";

const Democard = () => {


  const [card, setcard] = useState(null);

  useEffect(() => {
    const fetchcard = async () => {
      const res = await fetch("/Coffee.json");
      const data = await res.json();
      setcard(data);
    };

    fetchcard();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-4 mt-30 mb-30">
      <h1 className="text-xl raleway text-center text-[#1B1A1A]">
        Follow Us Now
      </h1>
      <h1
        className="text-6xl text-[#331A15] text-center rancho mb-10"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
      >
        Follow on Instagram
      </h1>

      <div className="grid xl:grid-cols-4 grid-cols-2 gap-4">
        {
            card?.map(item=>{
                return(
                   
                <img src={item.photo} alt="" className="rounded-2xl" />
                )
            })
        }
      </div>
    </div>
  );
};

export default Democard;
