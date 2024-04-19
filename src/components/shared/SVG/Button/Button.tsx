import { FC } from "react";
import styled from "styled-components";

type ButtonProps = {
  title: string;
  variant: string;
  onClick: () => void;
};

enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const PrimaryButton = styled.button`
  color: #fff;
  background: #be2f2f;
  font-size: 12px;
  line-height: 14px;
  border-radius: 2px;
  height: 22px;
  border: 1px solid #be2f2f;
  padding: 4px 10px;
  cursor: pointer;
`;

const SecondaryButton = styled.button`
  color: #1c5686;
  background: transparent;
  font-size: 14px;
  line-height: 16.8px;
  border-radius: 2px;
  height: 22px;
  border: none;
  padding: 2.5px 8px;
  cursor: pointer;
  text-decoration: underline;
  margin-right: 8px;
`;

export const Button: FC<ButtonProps> = ({ title, variant, onClick }) => {
  return ButtonVariant.PRIMARY === variant ? (
    <PrimaryButton onClick={onClick}>{title}</PrimaryButton>
  ) : (
    <SecondaryButton onClick={onClick}>{title}</SecondaryButton>
  );
};
