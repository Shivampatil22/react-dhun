import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import FavArt from "../../artistCard/FavArt";

export default function ArtistSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className=" max-w-[100%]"
            >
                <SwiperSlide style={{width:"fit-content"}}><FavArt/></SwiperSlide>
                <SwiperSlide style={{ width: "fit-content" }}><FavArt /></SwiperSlide>
                <SwiperSlide style={{ width: "fit-content" }}><FavArt /></SwiperSlide>
                <SwiperSlide style={{ width: "fit-content" }}><FavArt /></SwiperSlide>
                  <SwiperSlide style={{width:"fit-content"}}><FavArt/></SwiperSlide>
                <SwiperSlide style={{ width: "fit-content" }}><FavArt /></SwiperSlide>
                
                <SwiperSlide style={{ width: "fit-content" }}><FavArt /></SwiperSlide>
             
            </Swiper>
        </>
    );
}
