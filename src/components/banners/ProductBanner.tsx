import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Slug } from 'sanity';

import { ArrowRight, heroCarouselAnim } from '../../utils';
import { urlForImage } from '../../../sanity/lib/client';
import { OutlineButton } from '../../components';
import { motion } from 'framer-motion';

type Props = {
  data: {
    image: any;
    title: string;
    subTitle: string;
    specifications: string;
    price: number;
    slug: Slug;
  };
  direction: 'left' | 'right';
  flipText?: boolean;
  color: string;
};

const ProductBanner: React.FC<Props> = ({
  data,
  direction,
  flipText,
  color,
}) => {
  const [link, setLink] = useState('');

  const img = useMemo(() => {
    if (!data) return '';
    return urlForImage(data.image).width(1000).url();
  }, [data]);

  useEffect(() => {
    const handleLink = () => {
      switch (data.slug.current) {
        case 'breville-barista-touch':
          setLink(
            '/shop/products/espresso-machines/3928bdad-d1e5-4918-8f0a-fa075118f77e'
          );
          break;
        case 'hario-v60-ceramic':
          setLink(
            '/shop/products/pour-over-brewers/172242f4-af70-419b-b0e0-9a88739d1cec'
          );
          break;
        case 'aero-press-original':
          setLink(
            '/shop/products/press-brewers/c856d3cb-1d06-473f-b389-0a4cc0a74e84'
          );
          break;
        case 'credit-offer':
          setLink('/shop/credit-offer');
          break;
      }
    };

    handleLink();
  }, [data]);

  return (
    <motion.section
      variants={heroCarouselAnim}
      initial="hidden"
      animate="show"
      className={`flex flex-col-reverse ${
        direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      }  justify-center md:justify-between items-center ${color} rounded-2xl p-6 sm:px-10 drop-shadow-md md:h-72`}
    >
      <div
        className={`flex flex-col lg:max-w-[55%] gap-4 text-center ${
          direction === 'left' ? 'lg:text-left' : 'lg:text-right'
        }`}
      >
        <div
          className={`flex ${
            flipText === true ? 'flex-col-reverse' : 'flex-col'
          } gap-4 md:gap-0`}
        >
          <h3>{data.subTitle}</h3>
          <h1>{data.title}</h1>
        </div>
        <span
          className={`flex justify-center ${
            direction === 'left' ? 'lg:justify-start' : 'lg:justify-end'
          }`}
        >
          <Link href={link}>
            <OutlineButton text="Shop Now" Icon={ArrowRight} />
          </Link>
        </span>
      </div>
      <div
        className={`flex relative rounded-xl w-[250px] h-[250px] p-2 drop-shadow-sm`}
      >
        <Image
          loader={() => img}
          src={img}
          alt="Product banner image"
          className="drop-shadow-xl object-contain p-2"
          fill
          unoptimized
        />
      </div>
    </motion.section>
  );
};

export default ProductBanner;
