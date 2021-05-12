import React, { useState, useEffect } from 'react';
import Image from '../animated-image/Image';
import Arrow from './Arrow';
import style from './style.module.css';

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
      <>
        <Image
          handleMouse={(leave) => handleMouse('boy', leave)}
          url={`${process.env.PUBLIC_URL}/assets/images/boy${1}.png`}
          pos={{
            right: `${pos}%`,
            opacity: mouseOver[0] ? 1 : 0,
          }}
        />
        <Image
          handleMouse={(leave) => handleMouse('boy', leave)}
          url={`${process.env.PUBLIC_URL}/assets/images/boy${2}.png`}
          pos={{
            right: `${pos}%`,
            opacity: boyCount === 2 && !mouseOver[0] ? 1 : 0,
          }}
        />
        <Image
          handleMouse={(leave) => handleMouse('boy', leave)}
          url={`${process.env.PUBLIC_URL}/assets/images/boy${3}.png`}
          pos={{
            right: `${pos}%`,
            opacity: boyCount === 3 && !mouseOver[0] ? 1 : 0,
          }}
        />
        <Image
          handleMouse={(leave) => handleMouse('boy', leave)}
          url={`${process.env.PUBLIC_URL}/assets/images/boy${4}.png`}
          pos={{
            right: `${pos}%`,
            opacity: boyCount === 4 && !mouseOver[0] ? 1 : 0,
          }}
        />
      </>
      <>
        <Image
          handleMouse={(leave) => handleMouse('girl', leave)}
          url={`${process.env.PUBLIC_URL}/assets/images/girl${1}.png`}
          pos={{
            left: `${pos + 10}%`,
            opacity: mouseOver[1] ? 1 : 0,
          }}
        />
        <Image
          handleMouse={(leave) => handleMouse('girl', leave)}
          url={`${process.env.PUBLIC_URL}/assets/images/girl${2}.png`}
          pos={{
            left: `${pos + 10}%`,
            opacity: girlCount === 2 && !mouseOver[1] ? 1 : 0,
          }}
        />
        <Image
          handleMouse={(leave) => handleMouse('girl', leave)}
          url={`${process.env.PUBLIC_URL}/assets/images/girl${3}.png`}
          pos={{
            left: `${pos + 10}%`,
            opacity: girlCount === 3 && !mouseOver[1] ? 1 : 0,
          }}
        />
        <Image
          handleMouse={(leave) => handleMouse('girl', leave)}
          url={`${process.env.PUBLIC_URL}/assets/images/girl${4}.png`}
          pos={{
            left: `${pos + 10}%`,
            opacity: girlCount === 4 && !mouseOver[1] ? 1 : 0,
          }}
        />
      </>
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
