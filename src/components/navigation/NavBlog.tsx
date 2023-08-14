import React from 'react';
import Link from 'next/link';

import { Close } from '../../utils/icons';

type Props = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlogNav: React.FC<Props> = ({ status }) => {
  return (
    <div
      onMouseLeave={() => status(false)}
      className="flex flex-row justify-center w-screen h-[400px] z-50 bg-white"
    >
      <nav className="flex flex-col z-50  w-full lg:w-[1000px] py-6">
        <ul className="flex flex-row justify-between">
          <li>
            <Link href="/blog">
              <h4 className="clickable italic font-normal underline underline-offset-4">
                View All
              </h4>
            </Link>
          </li>
          <li
            onClick={() => status(false)}
            className="clickable flex flex-col items-center"
          >
            <Close size={25} />
            <p>Close</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogNav;
