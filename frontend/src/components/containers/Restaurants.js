import React, { useEffect } from "react";
import fetchRestaurants from "../../apis/restaurants";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Header = styled.div`
  background: ${theme.color.main};
  color: #fff;
  display: grid;
  justify-content: start;
  padding: 10px 30px;
`;

const LeadWrap = styled.div`
  align-items: center;
  background: #eee;
  color: #666;
  display: grid;
  justify-content: center;
  height: 400px;
`;

const Lead = styled.h2`
  font-size: ${theme.font.h2};
`;

const Restaurants = () => {
  useEffect(() => {
    fetchRestaurants().then((data) => console.log(data));
    return;
  }, []);

  return (
    <>
      <Header>
        <h1>Restaurants</h1>
      </Header>
      <LeadWrap>
        <Lead>Lest's Start!</Lead>
      </LeadWrap>
    </>
  );
};

export default Restaurants;
