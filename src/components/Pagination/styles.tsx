import styled, { css } from "styled-components";

export const Pagination = styled.div``;

export const Button = styled.button<{ active: boolean }>`
  ${({ active }) => css`
    width: 40px;
    height: 40px;

    font-family: inherit;
    font-size: 16px;

    margin: 0 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    font-weight: ${active ? "900" : "600"};
    background: ${active ? "#8252e5" : "transparent"};
    color: ${active ? "#101010" : "#eee"};
  `}
`;
