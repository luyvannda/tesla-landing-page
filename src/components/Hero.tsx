export default function Hero() {
  return (
    <div>
      <section className="car_section">
        <img src="ModelS.jfif" alt="Model S car" className="car_image" />
      </section>

      <div className="car_details transform_50">
        <h1 className="model_name">Model S</h1>
        <h2 className="tag_line">
          Order Online for{" "}
          <span className="underline cursor-pointer hover:text-blue-600 underline-offset-4 ">
            Touchless Delivery{" "}
          </span>
        </h2>
      </div>

      <div className="car_buttons transform_50">
        <button className="btn">Custom Order</button>
        <button className="btn inventory">Existing Inventory</button>
      </div>
    </div>
  );
}
