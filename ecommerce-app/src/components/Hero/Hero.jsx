import React from "react";
import * as S from "./Hero.style";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <S.HeroImg
        src="https://i.ibb.co/GCvmNkm/Butcher-Box-Hero.jpg"
        alt="two steaks"
      />
      <S.Content>
        <S.HeroText>
          <h1>ButcherBox</h1>
          <p>Fresh cuts to your door</p>
        </S.HeroText>
        <Link
          to="/shop"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <S.HeroBtn>Shop Now</S.HeroBtn>
        </Link>
      </S.Content>
      <S.BannerImg
        src="https://i.ibb.co/Tqbg7FW/Screenshot-2020-11-22-at-11-19-00.png"
        alt="awards"
      />
    </div>
  );
}

export default Hero;
