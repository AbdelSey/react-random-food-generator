import React, { useState, useEffect } from "react";
import Axios from "axios";

const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const Meal = () => {
  const [food, setFood] = useState([]);

  const getFood = async () => {
    await Axios.get(URL)
      .then((res) => setFood(res.data.meals))
      .catch((err) => console.log(err));
  };

  // always put an empty array at the end of use effect or itll be continuious
  useEffect(() => {
    getFood();
  }, []);

  return (
    <>
      <section className="">
        {food.map((f) => {
          const {
            strMeal,
            strCategory,
            strArea,
            strInstructions,
            strMealThumb,
          } = f;

          return (
            <article className="flex items-center justify-center mt-10 p-4 font-custom ">
              <div
                className="flex flex-col items-center justify-center container h-[90%] w-[700px] bg-orgCircle
              bg-right-bottom bg-slate-50
               rounded-2xl shadow-lg p-10"
              >
                <img
                  className="w-[350px] rounded-full shadow-xl mb-10"
                  src={strMealThumb}
                  alt="hi"
                />

                <div className=" flex flex-col items-center justify-center w-[70%] bg-white p-5 shadow-lg rounded-3xl ">
                  <div className="flex flex-col items-center justify-center ">
                    <button
                      className=" bg-orange-400 hover:bg-orange-500 p-3 mb-5 w-[200px] rounded-3xl text-lg font-bold text-white"
                      onClick={() => getFood()}
                    >
                      New Recipe!
                    </button>
                    <div className=" flex items-center justify-center space-x-3">
                      <h2>
                        <span className="font-bold"> Category: </span>{" "}
                        {strCategory}
                      </h2>

                      <h1 className="font-bold"> | </h1>

                      <h3>
                        <span className="font-bold"> Inspiration: </span>{" "}
                        {strArea}
                      </h3>
                    </div>

                    <h1 className="m-3 text-lg font-bold underline underline-offset-4">
                      {" "}
                      {strMeal}{" "}
                    </h1>
                  </div>
                  <p className="text-xs"> {strInstructions}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Meal;
