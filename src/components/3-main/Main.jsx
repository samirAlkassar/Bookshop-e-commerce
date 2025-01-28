import React from "react";
import { useState } from "react";
import "./main.css";
import { mainPageLinks } from "../../constants/constants.js";
import { enhancedItems } from "../../constants/items.js";
import ItemCard from "../ItemCard/ItemCard.jsx";



const Main = () => {
  const [mainLinktoggle, setMainLinkToggle] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectValue, setSelectValue] = useState("recent");
  const [searchValue, setSearchValue] = useState("");

  // we have total of 100 items, we are at page (1)
  const cardsPerPage = 20; // number of items per page is 20
  const lastIndex = currentPage * cardsPerPage; // last index is currenctPage(1) * cardsPerPage(20) = (20)
  const firstIndex = lastIndex - cardsPerPage; // first index is lastIndxx(20) - cardsPerPage(20) = (0)
  const Items_patches = enhancedItems.filter(
    (item) =>
      (mainLinktoggle === "All" || item.category === mainLinktoggle) &&
      (item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category.toLowerCase().includes(searchValue.toLowerCase()))
  );
  const Items_patches_filteredby = handelItemFilter(selectValue);
  const records = Items_patches_filteredby.slice(firstIndex, lastIndex);
  const numberOfPage = Math.ceil(
    Items_patches_filteredby.length / cardsPerPage
  );
  const Pages = [...Array(numberOfPage + 1).keys()].slice(1);

  const Filter_selections = [
    { label: "recent", value: "recent" },
    { label: "Price: Low to Hight", value: "price_high" },
    { label: "Price: Hight to Low", value: "price_low" },
    { label: "Best sellers", value: "best_seller" },
    { label: "rating", value: "rating" },
  ];

  function handelLinkToggle(linkName) {
    setMainLinkToggle(linkName);
    setCurrentPage(1);
  }
  function handelPageNumberToggle(PageNumber) {
    setCurrentPage(PageNumber);
  }

  function handelSelection(event) {
    setSelectValue(event.target.value);
    setCurrentPage(1);
  }

  function handelItemFilter(filterSelection) {
    if (filterSelection == "price_high") {
      return [
        ...Items_patches.sort((a, b) => {
          return a.price - b.price;
        }),
      ];
    } else if (filterSelection == "price_low") {
      return [
        ...Items_patches.sort((a, b) => {
          return b.price - a.price;
        }),
      ];
    } else if (filterSelection == "best_seller") {
      return [
        ...Items_patches.sort((a, b) => {
          return b.sold - a.sold;
        }),
      ];
    } else if (filterSelection == "rating") {
      return [
        ...Items_patches.sort((a, b) => {
          return b.rating - a.rating;
        }),
      ];
    }
    // else if (filterSelection == "recent"){
    //   return [...Items_patches.sort((a,b)=>{return b.rating - a.rating})]
    // }
    else {
      return Items_patches;
    }
  }

  function handelSearchSubmit(e) {
    e.preventDefault();
    setSearchValue("");
  }

  function handleInputChange(e) {
    setCurrentPage(1);
    setSearchValue(e.target.value);
  }

  return (
    <main>
      <div className="box-container">
        {/*search*/}
        <form className="main-search" onSubmit={handelSearchSubmit}>
          <input required className="main-input-search"
            type="search"
            value={searchValue}
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submite" className="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <nav className="main-nav">
          <ul>
            {[...mainPageLinks].reverse().map((links) => (
              <MainLinks
                key={links.id}
                className={
                  mainLinktoggle === links.title ? "mainlink-toggled" : ""
                }
                text={links.title}
                toggle={() => handelLinkToggle(links.title)}
                mainLinktoggle={mainLinktoggle}
              />
            ))}
          </ul>
        </nav>

        <div className="filter-section">
          <label htmlFor="filter">Filtered by:</label>
          <span>
            <i className="fa-solid fa-arrow-up-short-wide"></i>
          </span>

          <select name="filter" id="filter" onChange={handelSelection}>
            {Filter_selections.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>

        <section className="cards-container">

          {records.map((item) =>
            mainLinktoggle == "All" || mainLinktoggle === item.category ? (
              <ItemCard
                key={item.id}
                image={item.image}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                price={item.price}
                rating={item.rating}
              />
            ) : null
          )}

        </section>

        <nav className="page-nav">
          <ul>
            <li
              className="pageNavigation-btn"
              onClick={() =>
                currentPage < Pages.length && setCurrentPage(currentPage + 1)
              }
            >
              <i class="fa-solid fa-chevron-left"></i>
            </li>
            {[...Pages].reverse().map((page, id) => (
              <MainLinks
                key={id}
                className={currentPage === page ? "mainlink-toggled" : ""}
                text={page}
                toggle={() => handelPageNumberToggle(page)}
                mainLinktoggle={currentPage}
              />
            ))}
            <li
              className="pageNavigation-btn"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            >
              <i class="fa-solid fa-chevron-right"></i>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

function MainLinks({ text, toggle, className }) {
  return (
    <li onClick={toggle} className={className}>
      <a onClick={(e) => e.preventDefault()} href="">
        {text}
      </a>
    </li>
  );
}

export default Main;
