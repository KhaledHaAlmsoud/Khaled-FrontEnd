import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cart({ Token }) {
  const [ticArr, setTicArr] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:5000/oneEvent", {
        headers: { authorization: `Bearer ${Token}` },
      });
      console.log(res.data[0].cart);

      setTicArr(res.data[0].cart);
    } catch (error) {
      // console.log(res.data[0].cart)
    }
  }, []);

  const dalateEvent = async (id) => {
    const resDel = await axios.delete(`http://localhost:5000/Activitie/${id}`, {
      headers: { authorization: `Bearer ${Token}` },
    });
     setTicArr(resDel.data.cart);
    console.log(resDel.data, "khaled");
  };

  return (
    <div>
      {ticArr.map((ele) => {
        console.log(ele);

        return (
          <div>
            <h2>{ele.title}</h2>
            <p>{ele.des}</p>
            <p>{ele.deta}</p>
            <img src={ele.img} />
            <button
              onClick={() => {
                dalateEvent(ele._id);
              }}
            >
              DELET EVENT
            </button>
          </div>
        );
      })}
    </div>
  );
}
