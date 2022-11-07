import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Form = styled.form`

`

export const Input = styled.input`
  width: 300px;
  padding: 8px 32px 4px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Button = styled.button`
margin-left: 7px;
width: 40px;
  height: 38px;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  right: 6px;
`;
//position: absolute;