import { FC } from "react";
import { CloseIcon } from "../SVG/CloseIcon/CloseIcon";
import styled from "styled-components";
import { Button } from "../SVG/Button/Button";

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.section`
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ModalHeader = styled.div`
  background: #f2d7d7;
  width: 407px;
  padding: 9px 0 11px 16px;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ModalHeaderTitle = styled.h3`
  font-size: 16px;
  line-height: 16px;
  color: #be2f2f;
  margin: 0;
`;

const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 16px 16px 14px 16px;
`;

const ModalParagraph = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
`;

const ModalFooter = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

type ModalProps = {
  onClick: () => void;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ onClick, onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <ModalHeaderTitle>Remove favorite</ModalHeaderTitle>
          <ModalCloseButton onClick={onClose}>
            <CloseIcon variant="large" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <ModalParagraph>Planet will be remove from favorites</ModalParagraph>
          <ModalFooter>
            <Button title="Cancel" variant="secondary" onClick={onClose} />
            <Button title="Remove" variant="primary" onClick={onClick} />
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};
