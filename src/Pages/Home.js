import React, { useEffect, useState } from "react";
import SearchForm from "../Components/Form/SearchForm";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllExp(data);
      });
  }, []);
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px=20">
      <div className="mt-4">
        <SearchForm></SearchForm>
      </div>
      <div className="flex-1">
        <div>Home Cards</div>
        <div>ExpCards</div>
      </div>
    </div>
  );
};

export default Home;
