import React from "react";
import {isNil} from 'lodash';
import styled, {css} from "styled-components";

export const IterationCounter = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
`;

export const BlockContainers = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

export const Block = styled.div<{background: string, left?: number}>`
  ${({left}) => left ? css`
    left: ${left}px;
  ` : ''}
  transition: transform .5s ease-out;
  background: ${({background}) => background};  
  position: relative;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #fff;
  text-align: center;
`;

export const DiffBlock = styled(Block)`
  background: yellow;
`;

export const PrevIndexBlock = styled.div`
  background: #373737;
  color: #fff;
  width: 20px;
  height: 15px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  line-height: 15px;
`;


