import styled from "styled-components";

export const FavoriteSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  height: 100vh;
  position: relative;
`;

export const FavoritesNotification = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FavoritesList = styled.ul`
  margin: 0;
  padding: 22px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  &::after {
    content: "";
    width: 328px;
  }
`;

export const FavoritesItem = styled.li`
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 0px #0000001a;
  margin-bottom: 20px;
  width: 328px;
`;

export const FavoritesImgContainer = styled.div`
  width: 328px;
  height: 200px;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FavoritesTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #333333;
  margin: 0 0 5px;
`;

export const FavoriteSubtitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
  margin: 0;
`;

export const FavoritesHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FavoritesFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 8px 27px;
`;

export const FavoritesParagraph = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  margin: 0;
  margin-bottom: 11px;
`;

export const FavoriteHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 14px 14px;
`;

export const RemoveButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`;
