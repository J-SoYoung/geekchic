import React from "react";
import HomeIcon from "../../assets/icons/nav_home.svg";
import ItemsIcon from "../../assets/icons/nav_items.svg";
import WishIcon from "../../assets/icons/nav_wish.svg";
import UsedIcon from "../../assets/icons/nav_used.svg";
import MyIcon from "../../assets/icons/nav_my.svg";

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 mg-auto w-full max-w-[596px] border-t-2 bg-white">
      <ul className="flex justify-around p-4">
        <li className="text-center">
          <img src={HomeIcon} alt="Home" className="w-6 h-6 mx-auto" />
          <span className="text-xs">홈</span>
        </li>
        <li className="text-center">
          <img src={ItemsIcon} alt="Home" className="w-6 h-6 mx-auto" />
          <span className="text-xs">상품</span>
        </li>
        <li className="text-center">
          <img src={WishIcon} alt="Home" className="w-6 h-6 mx-auto" />
          <span className="text-xs">관심목록</span>
        </li>
        <li className="text-center">
          <img src={UsedIcon} alt="Home" className="w-6 h-6 mx-auto" />
          <span className="text-xs">중고거래</span>
        </li>
        <li className="text-center">
          <img src={MyIcon} alt="Home" className="w-6 h-6 mx-auto" />
          <span className="text-xs">마이</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
