import Fruit1 from "../../assets/apple.png";
import Fruit2 from "../../assets/orange.png";
import Fruit3 from "../../assets/avocado.png";
import Fruit4 from "../../assets/cherry.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/Animation";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$2.00",
    img: Fruit1,
    delay: 0.2,
  },

  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$2.00",
    img: Fruit2,
    delay: 0.4,
  },

  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$2.00",
    img: Fruit3,
    delay: 0.6,
  },

  {
    id: 4,
    title: "Fresh cherries",
    link: "/",
    price: "$2.00",
    img: Fruit4,
    delay: 0.8,
  },
];

const Menus = () => {
  return (
    <section>
      <div className=" container pt-12 pb-20 cursor-pointer">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="
                    text-2xl font-bold text-left pd-10 uppercase"
        >
          Our Menu
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-3 ">
          {MenusData.map((menu) => (
            <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              key={menu.id}
              className=" text-center bg-white rounded-2xl px-2 py-1 pt-4 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] 
                        flex flex-col items-center gap-3"
            >
              <img
                src={menu.img}
                alt=""
                className="w-[65px] mb-4 scale-125 transform-translate-y-6"
              />

              <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-secondary">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
