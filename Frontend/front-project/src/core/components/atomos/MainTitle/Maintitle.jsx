import "./MainTitle.css";

const MainTitle = () => {
  return (
    <>
      <h1 className="title desktop">
        Ayudá al planeta y a tu bolsillo,
        <br />
        <span className="highlight">plato a plato.</span>
      </h1>
      <h1 className="title mobile">
        Ayudá al planeta <br /> y a tu bolsillo,
        <br />
        <span className="highlight">plato a plato.</span>
      </h1>
      <h1 className="title tablet">
        Consumo que importa, <br /> comida que vale
      </h1>
    </>
  );
};

export default MainTitle;
