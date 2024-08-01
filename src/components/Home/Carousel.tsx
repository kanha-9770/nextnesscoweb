import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      title: "Like a paper cup, a sustainable relationship balances strength and flexibility, built to weather life's challenges without losing its shape.",
      image: "/_next/static/media/company_v1.02911635.png",
      width: 384,
      height: 75,
    },
    {
      id: 2,
      title: "Crafted in harmony with Jaipur's heritage, Nesco's paper cup machines symbolize modern efficiency integrated with the timeless allure of the Pink City.",
      image: "/_next/static/media/pinkCity_v1.44742a50.png",
      width: 256,
      height: 75,
    },
    {
      id: 3,
      title: "Nessco's paper cup machines leave a global footprint, catering to sustainable packaging needs worldwide with innovative technology.",
      image: "/_next/static/media/mission_v1.ccf72a8a.png",
      width: 256,
      height: 75,
    },
    {
      id: 4,
      title: "From Asia to Europe, Nessco's paper cup machines uphold quality and eco-friendliness, shaping the future of packaging solutions internationally.",
      image: "/_next/static/media/strength_v1.02ce7b6e.png",
      width: 384,
      height: 75,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={styles.carousel}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.card} ${
            currentIndex === index ? styles.active : ""
          } ${currentIndex === (index + 1) % items.length ? styles.next : ""}`}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={item.width}
            height={item.height}
            className={styles.image}
          />
          <div className={styles.content}>
            <h2 className="font-montserrat">{item.title}</h2>
          </div>
        </div>
      ))}
      <div className={styles.indicators}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.active : ""
            }`}
          >
            <span className={styles.progress}></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
