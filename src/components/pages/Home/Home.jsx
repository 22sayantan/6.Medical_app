import "./home.scss";
import { Link, Routes, Route } from "react-router-dom";

// images imported .....
import Academic from "../../assets/academic.png";
import Ambulance from "../../assets/ambulance.png";
import Ayurveda from "../../assets/ayurveda.jpg";
import Medicine from "../../assets/medicine.jpg";

function Home() {
  const menu_list = [
    {
      id: 1,
      img: Academic,
      title: "academic",
    },
    {
      id: 1,
      img: Ambulance,
      title: "ambulance",
    },
    {
      id: 1,
      img: Ayurveda,
      title: "ayurveda",
    },
    {
      id: 4,
      img: Medicine,
      title: "medicine",
    },
  ];

  return (
    <section className="home">
      {menu_list.map((item) => (
        <>
          <div key={item.id} className="unit_menu_item">
            <Link to={item.title}>
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
            </Link>
          </div>
        </>
      ))}
    </section>
  );
}

export default Home;
