import { NextPage } from "next";
import React from "react";
import { useAppSelector } from "../redux/hooks/hooks";

const HomePage: NextPage = () => {

  const name = useAppSelector((state)=>state.UserLogged.userLogged.name);

  return (
      <div className="flex items-center justify-center">
        <div className="m-auto block p-6 mt-8">
            <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Wellcome <span className="text-purple-700 font-serif ">{name}</span> to PokeAPI proudly announces Beta support for GraphQL</h5>
        </div>
      </div>
  );
};

export default HomePage;
