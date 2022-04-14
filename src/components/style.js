import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: normal;
  align-items: center;
`;

export const BorderWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: #111622;
  gap: normal;
  align-items: center;
  //border: 2px solid;
  width: 100%;
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 13px;
`;

export const HeaderText = styled.div`
  text-align: center;
  font-size: 17px;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const StyledPending = styled(motion.div)`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 13px;
  height: 60px;
  width: 60px;
`;

export const StyledButton = styled.button`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

  border-radius: 8px;
  border: none;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  font-size: 13px;
`;

export const GreyButton = styled(StyledButton)`
  background-color: #6c7284;
  background-image: none;
  border-radius: 3px;
  border: 0.2px solid #565a69;
`;

export default function Pending() {
  return (
    <StyledPending
      animate={{
        scale: [1, 1.5, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 360, 360, 360, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '50%', '20%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1,
      }}
    >
      진행중..
    </StyledPending>
  );
}

export const StyledInput = styled.input`
  color: white;
  background: inherit;
  border: none;
`;

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const Modal = styled(motion.div)`
  height: 20%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 1;
  border-radius: 8px;
`;
