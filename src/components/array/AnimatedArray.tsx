import React, { useState, useEffect } from "react";
import { isNil } from "lodash";
import styled from "styled-components";
import { BlockInterface } from "./types";
import {
  BlockContainers,
  IterationCounter,
  Block,
  PrevIndexBlock,
} from "./layout";
import { getBlockColorByIndex } from "./helper";

export default function AnimatedArray({
  iterrations,
}: {
  iterrations: BlockInterface[][];
}) {
  const [iterrationIndex, setItterationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIterrations = iterrationIndex + 1;
      setItterationIndex(newIterrations);
      if (newIterrations === iterrations.length - 1) {
        debugger;
        clearInterval(interval);
      }
      
    }, 500);
  }, []);

  const iterationData = iterrations[iterrationIndex];

  return (
    <BlockContainers>
      <IterationCounter>{`${iterrationIndex + 1}:`}</IterationCounter>
      {iterationData.map((el, index) => {
        const currentLeft = index * 50;
        const newLeft = el.curIndex * 50;
        const diffLeft = newLeft - currentLeft;
        console.log(currentLeft,newLeft,diffLeft);
        return (
          <Block
            left={diffLeft}
            background={getBlockColorByIndex(el.originalIndex)}
            key={el.curIndex}
          >
            {el.value}
            {!isNil(el.prevIndex) && (
              <PrevIndexBlock>{el.prevIndex}</PrevIndexBlock>
            )}
          </Block>
        );
      })}
    </BlockContainers>
  );
}
