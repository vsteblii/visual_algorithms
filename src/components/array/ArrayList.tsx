import React from "react";
import {isNil} from 'lodash';
import styled from "styled-components";
import {BlockInterface} from './types';
import {BlockContainers, IterationCounter, Block, PrevIndexBlock} from './layout';
import {getBlockColorByIndex} from './helper';



export default function ArrayComponent({
  arr,
  iteration,
}: {
  arr: BlockInterface[];
  iteration: number;
}) {
  return (
    <BlockContainers>
      <IterationCounter>{`${iteration}:`}</IterationCounter>
      {arr.map((el, index) => {
        return (
          <Block background={getBlockColorByIndex(el.originalIndex)} key={index}>
            {el.value}
            {!isNil(el.prevIndex) && <PrevIndexBlock>{el.prevIndex}</PrevIndexBlock>}
          </Block>
        );
      })}
    </BlockContainers>
  );
}
