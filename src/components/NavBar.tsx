import DropDown from "./DropDown";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src="tesla.svg" alt="Tesla Logo" className="h-6" />
      <div className="hidden lg:block">
        <a href="#modelS" className="nav_link">
          Model S
        </a>
        <a href="#model3" className="nav_link">
          Model 3
        </a>
        <a href="#modelX" className="nav_link">
          Model X
        </a>
        <a href="#modelY" className="nav_link">
          Model Y
        </a>
        <a href="#solarRoof" className="nav_link">
          Solar Roof
        </a>
        <a href="#solarPanels" className="nav_link">
          Solar Panels
        </a>
      </div>
      <div>
        <a href="#shop" className="nav_link hidden lg:inline-block">
          Shop
        </a>
        <a href="#account" className="nav_link hidden lg:inline-block">
          Account
        </a>

        <DropDown />
      </div>
    </div>
  );
}
