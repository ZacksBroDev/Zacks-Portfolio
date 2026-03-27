import React, { useEffect, useState } from "react";
import Items from "../../Utils/Items";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./Project.css";

const Project = () => {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState("all");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && items.length > 3) {
      setItems(items.slice(0, 3));
    }
  }, [location, items]);

  const filterItem = (category) => {
    const filtered = Items.filter((item) => item.category === category);
    setItems(filtered);
    if (filtered.length > 3 && location.pathname === "/") {
      setItems(filtered.slice(0, 3));
    }
  };

  return (
    <div className={`${location.pathname !== "/" && "pt-16"}`}>
      <div className="parent py-12">
        <div>
          <div className="mb-12">
            <h1 className="text-4xl font-semibold text-center">
              Featured <span className="text-primary">Projects</span>
            </h1>
          </div>
        </div>

        <div>
          <div className="mt-6 mb-2 flex items-center justify-center flex-wrap">
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
                activeBtn === "all" && "active-btn"
              }`}
              onClick={() => {
                setActiveBtn("all");
                location.pathname === "/"
                  ? setItems(Items.slice(0, 3))
                  : setItems(Items);
              }}
            >
              All
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
                activeBtn === "business" && "active-btn"
              }`}
              onClick={() => {
                setActiveBtn("business");
                filterItem("business");
              }}
            >
              Business
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
                activeBtn === "personal" && "active-btn"
              }`}
              onClick={() => {
                setActiveBtn("personal");
                filterItem("personal");
              }}
            >
              Personal
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
                activeBtn === "game" && "active-btn"
              }`}
              onClick={() => {
                setActiveBtn("game");
                filterItem("game");
              }}
            >
              Game
            </button>
          </div>

          {/* Items Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.id}
                to={`/project/${item.id}`}
                className="item-container rounded-xl shadow-lg flex flex-col hover:shadow-primary hover:-translate-y-1 duration-300 group"
                style={{ backgroundColor: "#1e1e1e" }}
              >
                {/* Featured Badge for Business Projects */}
                {item.category === "business" && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                      Client Work
                    </span>
                  </div>
                )}

                {/* Image Container */}
                <div className="item relative overflow-hidden rounded-t-xl">
                  <img
                    className="rounded-t-xl w-full h-56 object-contain bg-[#2a2a2a] group-hover:scale-105 transition-transform duration-300"
                    src={item.mainImage}
                    alt={item.title || "Item Image"}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="btn btn-sm border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white duration-300">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Card Content - Always Visible */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral text-sm line-clamp-2 mb-3 flex-grow">
                    {item.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {item.technologies?.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-neutral/20 text-neutral px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies?.length > 3 && (
                      <span className="text-xs text-neutral px-1">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {location.pathname === "/" && (
          <div className="mt-4 text-right">
            <Link
              to="/project"
              className="text-2xl hover:text-primary duration-300"
            >
              <button className="primary-button">
                <span>See All</span>
                <span>
                  <FiArrowRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
