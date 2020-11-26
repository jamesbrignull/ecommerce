import React from "react";
import * as S from "./Footer.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <S.Footer>
      <h2>Contact Us</h2>
      <p>+44 (0)000 000 0000</p>
      <p>123 Croydon Road</p>
      <p>Croydon</p>
      <S.IconContainer>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </S.IconContainer>
    </S.Footer>
  );
}

export default Footer;
