import React, { useState, useEffect } from 'react';
import Image from '../animated-image/Image';
import Arrow from './Arrow';
import boy1 from './images/boy1.png';
import boy2 from './images/boy2.png';
import boy3 from './images/boy3.png';
import boy4 from './images/boy4.png';
import girl1 from './images/girl1.png';
import girl2 from './images/girl2.png';
import girl3 from './images/girl3.png';
import girl4 from './images/girl4.png';
import style from './style.module.css';

const images = {
  girl: {
    1: girl1,
    2: girl2,
    3: girl3,
    4: girl4,
  },
  boy: {
    1: boy1,
    2: boy2,
    3: boy3,
    4: boy4,
  },
};

const Hero = () => {
  const [boyCount, setBoyCount] = useState(1);
  const [girlCount, setGirlCount] = useState(1);
  const [mouseOver, setmouseOver] = useState([true, true]);
  const [showArrow, setShowArrow] = useState(true);
  const [pos, setpos] = useState(38);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 550) return setShowArrow(false);
      setShowArrow(window.scrollY > 430 ? false : true);
      const x = window.scrollY / 25;
      setpos(x + 38);
      if (x > 0) setmouseOver([true, true]);
    });
  }, []);

  const handleMouse = (type, leave) => {
    console.log(type);

    if (pos > 38) return;
    if (type === 'boy') {
      let mO = [...mouseOver];
      mO[0] = leave;
      setmouseOver(mO);
      return setBoyCount((c) => (c > 3 ? 2 : c + 1));
    }

    let mO = [...mouseOver];
    mO[1] = leave;
    setmouseOver(mO);
    return setGirlCount((c) => (c > 3 ? 2 : c + 1));
  };
  const arrowClicked = () => {
    // For Safari
    document.body.scrollTop = 550;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 550;
  };

  return (
    <>
      <Image
        handleMouse={(leave) => handleMouse('boy', leave)}
        url={mouseOver[0] ? images.boy['1'] : images.boy[boyCount]}
        // url={`${process.env.PUBLIC_URL}/assets/images/boy${
        //   mouseOver[0] ? 1 : boyCount
        // }.png`}
        pos={{ right: `${pos}%` }}
      />
      <Image
        handleMouse={(leave) => handleMouse('girl', leave)}
        url={mouseOver[1] ? images.girl['1'] : images.girl[girlCount]}
        pos={{ left: `${pos + 10}%` }}
      />
      <div
        onClick={arrowClicked}
        className={`${style.arrContainer} ${!showArrow ? style.hide : ''}`}
      >
        <Arrow />
      </div>
    </>
  );
};

export default Hero;
