import React from "react";
import Container from "../Container";

function Banner() {
  return (
    <div>
      <div
        className="bg-fixed bg-cover overflow-auto w-full "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <Container>
          <div className="py-16">
            <h1 className="text-2xl font-semibold">
              ECS is Unique! Our proprietary algorithm enables us to deliver
              data driven creative that reflects the characteristics of the
              individual…WOW!
            </h1>
            <div className="flex text-lg font-semibold items-center my-3">
              <button className="bg-[#6366F1] py-5 px-6 rounded hover:scale-105 duration-300">
                CONTACT US{" "}
              </button>
              <span className="mx-3 hover:underline hover:underline-offset-1 duration-300">
                to learn more
              </span>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-10">
          <h1 className="text-2xl font-semibold my-5">
            ECS is an enterprise marketing development solutions company. We
            offer customers best-in-class, efficient, collaborative 1:1
            intelligent data driven marketing, creative, technology and print
            procurement solutions:
          </h1>
          <h2 className="text-xl text-[#FFFFFFb3]">
            Our unique “Clone Model” development, exploratory data analysis and
            advanced algorithms are run against one of the largest network data
            bases in the USA yielding information and insight about our clients
            customers far beyond traditional profile data. This enables SPECIFIC
            targeting using individual characteristics and attributes resulting
            in significantly higher yields of net new customers and stronger
            retention.
          </h2>
        </div>
        <img className="mb-10" src="./banner-img.png" alt="banner" />
      </Container>
    </div>
  );
}

export default Banner;
