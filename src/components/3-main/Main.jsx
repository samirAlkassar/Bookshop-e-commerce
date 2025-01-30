import React, { useEffect } from "react";
import { useState,createContext } from "react";
import "./main.css";
// import { mainPageLinks } from "../../constants/constants.js";
import { enhancedItems } from "../../constants/items.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
import Filter from "../ui-elements/Filter.jsx"
import { useWishlistContext } from "../../context/WishlistContext.jsx";
import { useAPIcontext } from "../../context/APIcontext.jsx";




const Main = () => {
  const [mainLinktoggle, setMainLinkToggle] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectValue, setSelectValue] = useState("recent");
  const [searchValue, setSearchValue] = useState("");

  const {loading, data, error} = useAPIcontext()

  if (loading) return <p>loading....</p> 
  if (!data) return <p>data is null</p>
  if (error) return <p>{error.message}</p> 

  // we have total of 100 items, we are at page (1)
  const cardsPerPage = 20; // number of items per page is 20
  const lastIndex = currentPage * cardsPerPage; // last index is currenctPage(1) * cardsPerPage(20) = (20)
  const firstIndex = lastIndex - cardsPerPage; // first index is lastIndxx(20) - cardsPerPage(20) = (0)
  const Items_patches = data.filter(
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
  const {handleItemClick } = useWishlistContext();
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
          <button type="submite" className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <nav className="main-nav">
          <ul>
          {!data ? (
                <p>data is null</p>
              ) : (
                ["All",...new Set(data.map(item => item.category))].reverse().map((category, index) => (
                  <MainLinks
                    key={index}
                    className={mainLinktoggle === category ? "mainlink-toggled" : ""}
                    text={category}
                    toggle={() => handelLinkToggle(category)}
                    mainLinktoggle={mainLinktoggle}
                  />
                ))
              )}
          </ul>
        </nav>
        <div className="filter-Pagination">
          <nav className="page-nav">
            <PagePagination currentPage={currentPage} setCurrentPage={setCurrentPage} Pages={Pages} handelPageNumberToggle={handelPageNumberToggle}/>
          </nav>
          <Filter label="Filtered by:" icon="fa-solid fa-arrow-up-short-wide" filter_list={Filter_selections} handelSelection={handelSelection} />
        </div>

        <section className="cards-container">
        {loading && <p>Loading....</p>}
        {(!data) && <p>Data is null</p>}
        {error && <p>{error.message}</p>}

          {!data? <p>data is null</p>: records.map((item) =>
            mainLinktoggle == "All" || mainLinktoggle === item.category ? (
              <ItemCard
                key={item.id}
                image={item.thumbnail}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                price={item.price}
                rating={item.rating}
                handleItemClick={()=>handleItemClick(item.id)}
              />
            ) : null
          )}

        </section>

        <nav className="page-nav">
          <PagePagination currentPage={currentPage} setCurrentPage={setCurrentPage} Pages={Pages} handelPageNumberToggle={handelPageNumberToggle} />
        </nav>
      </div>
    </main>
  );
};

function MainLinks({ text, toggle, className, }) {
  return (
    <>
      <li onClick={toggle} className={className}>
        <a onClick={(e) => e.preventDefault()} href="">
          {text}
        </a>
      </li>
    </>
  );
}

function PagePagination({currentPage, setCurrentPage,Pages,handelPageNumberToggle}){
  return (
    <ul>
          <li
            className="pageNavigation-btn"
            onClick={() =>
              currentPage < Pages.length && setCurrentPage(currentPage + 1)
            }
          >
            <i className="fa-solid fa-chevron-left"></i>
          </li>
          {Pages.length >= 9 && <MainLinks mainLinktoggle={currentPage} toggle={() => handelPageNumberToggle(Pages.at(-1))} className={currentPage === Pages.at(-1) ? "mainlink-toggled" : ""} text={Pages.at(-1)}/>}
          {Pages.length >= 9 && <MainLinks text="..."/>}
          {[...Pages].reverse().map((page, id) => (
            page < 9 && <MainLinks
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
            <i className="fa-solid fa-chevron-right"></i>
          </li>
        </ul>
    )
}

export default Main;
