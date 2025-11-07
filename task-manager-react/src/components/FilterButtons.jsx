// Renders All/Active/Completed Filter Buttons
function FilterButtons({ filter, setFilter }) {
  // Renders 3 filter buttons (All, Active, Completed) + hightlights selected one
  return (
    <div>
      {/* Created filter button for All w/ conditional classname setting */}
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All
      </button>
      {/* Created filter button for Active w/ conditional classname setting */}
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        Active
      </button>
      {/* Created filter button for Completed w/ conditional classname setting */}
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
}

// Makes component available in other files
export default FilterButtons;
