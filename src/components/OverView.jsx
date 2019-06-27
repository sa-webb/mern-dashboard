import React, { useState, useEffect } from "react";
import axios from "axios";

export const OverView = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/invoices/");
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <p></p>
  );
};
