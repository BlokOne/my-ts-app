/* eslint-disable @typescript-eslint/ban-ts-comment */
// import Title from "./components/home";
// import TBlock from "./components/t-blocks";
// import Video from "./components/videos";
// import Layout from "./layout";

// import Referral from "./components/referral";
// import TStaking from "./components/tStaking";
// import BuySell from "./components/buySell";
// import Roadmap from "./components/roadmap";
import { MediaQueryProvider } from "./media";



// import { useMediaQuery } from '../../media/useMedia';
// import Item from './item';
// import ModalContent from './modalContent';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
// import Modal from 'react-modal';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Mousewheel } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';



function App() {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const refSwiper = useRef<HTMLDivElement>(null)
  const activeSlideRef = useRef<number | null>(null)

  const [disabledSwiper, setDisabledSwiper] = useState<boolean>(true)

  activeSlideRef.current = activeSlide

  //@ts-ignore
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: null,
    scrollPos: 0,
  });

  //@ts-ignore
  const handleSlideChange = (swiper) => {
    if (activeSlide > swiper.activeIndex) {
      //@ts-ignore
      setScrollStatus((prev) => ({ ...prev, scrollDirection: "up" }))
    } else {
      //@ts-ignore
      setScrollStatus((prev) => ({ ...prev, scrollDirection: "down" }))
    }
    //@ts-ignore
    setActiveSlide((prev) => {
      if (refSwiper.current) {
        const elem = refSwiper.current
        const elemY = elem.getBoundingClientRect().y
        if (elemY <= 0 && swiper.activeIndex === 2) {
          setDisabledSwiper(true)
        }
      }

      return swiper.activeIndex
    });

  };



  const handleScrollDocument = useCallback(() => {
    if (refSwiper.current) {
      const elem = refSwiper.current
      const elemY = elem.getBoundingClientRect().y

      if (elemY <= 0) {
        console.log('')
      } else {
        setDisabledSwiper(false)

      }
    }

    setScrollStatus((prev: any) => {
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? "up"
            : "down",
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  }, [])



  useEffect(() => {
    window.addEventListener('scroll', handleScrollDocument);

    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);
  const topRef = useRef(null)

  useLayoutEffect(() => {

    if (activeSlide === 0) {
      console.dir(topRef.current)
      //@ts-ignore
      window.scrollTo(0, topRef.current.clientHeight)
    }
  }, [activeSlide])




  return (
    <MediaQueryProvider>
      <div ref={topRef} style={{ width: '100%', height: activeSlide === 0 ? '150vh' : 0, background: "rebeccapurple" }}>
        Start
      </div>

      <Swiper
        //@ts-ignore
        ref={refSwiper}
        onSlideChange={handleSlideChange}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        // effect={"fade"}
        className={`${disabledSwiper ? 'mySwiper_disabled' : ''} mySwiper`}
        modules={[Pagination, Navigation, Mousewheel]}
      >
        <SwiperSlide className="slide slide1"></SwiperSlide>
        <SwiperSlide className="slide slide2"></SwiperSlide>
        <SwiperSlide className="slide slide3"></SwiperSlide>
      </Swiper>
      {
        activeSlide === 2 && (
          <div style={{ width: '100%', height: activeSlide === 2 ? '150vh' : 0, background: "rebeccapurple" }}>
            Fininsh
          </div>
        )
      }

      {/* <Layout> */}
      {/* <Title /> */}

      {/* <TBlock />
        <Video />

        <TStaking />
        <Referral /> */}
      {/* <Roadmap />
      <BuySell /> */}
      {/* </Layout> */}
    </MediaQueryProvider >
  )
}

export default App;
