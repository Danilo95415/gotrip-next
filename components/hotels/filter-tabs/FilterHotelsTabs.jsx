import { useState } from "react";

const FilterTabsHotels3 = () => {
  const [filterOption, setFilterOption] = useState("hotel");

  const filterOptions = [
    { label: "All", value: "hotel" },
    { label: "Restaurant", value: "tour" },
    { label: "Activity", value: "activity" },
    { label: " Home Service", value: "holiday_rentals" },
    { label: "Car", value: "car" },
    { label: "Shop", value: "cruise" },
    { label: "Hotel", value: "flights" },
    // add more options as needed
  ];

  return (
    <div className="tabs__controls row x-gap-10 y-gap-10">
      {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
              filterOption === option.value ? "is-tab-el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterTabsHotels3;
