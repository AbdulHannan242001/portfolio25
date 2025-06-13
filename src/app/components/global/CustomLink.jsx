'use client';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

const CustomLink = ({ text, href, targetBlank = true }) => {
  const controls = useAnimation();

  return (
    <Link
      href={href}
      {...(targetBlank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <motion.div
        className="flex flex-col gap-0 px-4 py-3 rounded text-black font-medium cursor-pointer font-mono"
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => controls.start('hover')}
        onMouseLeave={() => controls.start('initial')}
      >
        <div className="h-[16px] sm:h-[22px] flex flex-col overflow-hidden">
          <motion.div className="flex">
            {Array.from(text).map((letter, index) => (
              <Alphabet
                key={`top-${index}`}
                letter={letter}
                delay={index * 0.01 + 0.2}
                controls={controls}
                isSpace={letter === ' '}
              />
            ))}
          </motion.div>
          <motion.div className="flex">
            {Array.from(text).map((letter, index) => (
              <Alphabet
                key={`bottom-${index}`}
                letter={letter}
                delay={index * 0.01 + 0.15}
                controls={controls}
                isSpace={letter === ' '}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

const Alphabet = ({ letter, delay, controls, isSpace }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  const variants = {
    initial: { y: 0 },
    hover: { y: -height },
  };

  return (
    <motion.span
      ref={ref}
      variants={variants}
      animate={controls}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={`inline-block ${isSpace ? 'mr-1' : 'mr-[0px]'} sm:text-base text-xs`}
    >
      {letter}
    </motion.span>
  );
};

export default CustomLink;