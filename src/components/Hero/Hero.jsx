import { IoBagHandleOutline } from "react-icons/io5";
import HeroImg from "../../assets/fruit-plate.png";
import LeafImg from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/Animation";

export const Hero = () => {
  return (
    <section>
      <div className="container grid frid-cols-1 md:grid-cols-2 min-h-[400px] relative">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div
            className="text-center md:text-left space-y-6
                lg:max-w[400px]"
          >
            <motion.h1
              variants={FadeRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font bold
                    leading-relaxed xl:leading-loose font-averia"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>

            <motion.p
              variants={FadeRight(0.7)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            <motion.p
              variants={FadeRight(1)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              Healthy and yummy food for fresh morning breakfast. eat Daily for
              good health and mind Order now and get 20% off on your first order
            </motion.p>
            {/* BUTTON SECTION */}
            <motion.div
              variants={FadeRight(1.3)}
              initial="hidden"
              animate="visible"
              className="flex justify-center 
                    md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  {" "}
                  <IoBagHandleOutline />
                </span>{" "}
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0 }}
            src={HeroImg}
            alt=""
            className="w-[300px] md:w-[550px] drop-shadow"
          />
        </div>
        {/* LEAF IMAGE */}
        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, x: -200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            src={LeafImg}
            alt=""
            className="w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};
