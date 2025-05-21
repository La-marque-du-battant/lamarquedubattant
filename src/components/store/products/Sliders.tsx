"use client";
import ProductCard from "@/components/store/products/ProductCard";
import NextArrow from "@/components/store/products/NextArrow";
import PrevArrow from "@/components/store/products/PrevArrow";

import Slider from "react-slick";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useProduct } from "@/context/ProductContext";
export default function Sliders({
  setOpen,
  setProduct,
}: {
  setOpen: (value: boolean) => void;
  setProduct: (value: ProductType) => void;
}) {
  //const [slideToShow, setSlideToShow] = useState(4);
  //const [progress, setProgress] = useState(0);

  /* const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  }; */

  /*  useEffect(() => {
    setSlides();
    //setProgress(100 / articles.length - slideToShow + 1);
    window.addEventListener("resize", () => {
      setSlides();
    });
    }, []); */

  const { products } = useProduct();

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    //nextArrow: <NextArrow />,
    //prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    /*  afterChange: (current: number) => {
      setProgress(100 / articles.length - (slideToShow + 1)) * (current + 1);
      console.log(slideToShow);
    }, */
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Fragment>
      <div className="relative">
        <Slider {...settings}>
          {products.map((item: ProductType, index: number) => (
            <Link href={`/products/${item.id}`} key={index}>
              <ProductCard
                product={item}
                setOpen={setOpen}
                setProduct={setProduct}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
}
