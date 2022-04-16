import React from 'react';
import {cloneDeep} from 'lodash';
import './App.css';
import {BlockInterface} from './components/array/types';
import ArrayList from './components/array/ArrayList';
import AnimatedArray from './components/array/AnimatedArray';
import styled from 'styled-components';

const AppWrapper = styled.div`
  padding: 20px;
`;

const swapElements = (arr: BlockInterface[], index1: number, index2: number) => {
  arr[index1] = {
    ...arr[index1],
    prevIndex: index1,
    curIndex: index2,
  };
  arr[index2] = {
    ...arr[index2],
    prevIndex: index2,
    curIndex: index1,
  };
  
  const temp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = temp;
};

const updateArrPrevElements = (arr: BlockInterface[]) => {
  for(let i = 0; i< arr.length;i++){
    arr[i].prevIndex = null;
  }
};

const updateArrCurElements = (arr: BlockInterface[]) => {
  for(let i = 0; i< arr.length;i++){
    arr[i].curIndex = i;
  }
};

const bubleSort = (originalArr: number[]) => {
  const arr: BlockInterface[] = originalArr.map((value, index) => {
    return {
      originalIndex: index,
      curIndex: index,
      prevIndex: null,
      value: value,
    };
  });
  const iterationsArr: BlockInterface[][] = [];
  iterationsArr.push(cloneDeep(arr));

  for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
      console.log('i-j', i, j);
      if(arr[j].value > arr[i].value){
        updateArrCurElements(arr);
        updateArrPrevElements(arr);
        swapElements(arr, i, j);
        iterationsArr.push(cloneDeep(arr));
      }
    }
  }

  return iterationsArr;
};

function App() {
  const iterations: BlockInterface[][] = bubleSort([1,2,3,4,5,6,7,8,9,10]);
  return (
    <AppWrapper>
      <AnimatedArray iterrations={iterations} />
      {iterations.map((iteration, index, allIterations) => {
        const prev = index !== 0 ? allIterations[index-1] : [];
        return <ArrayList key={index} iteration={index+1} arr={iteration}/>
      })}
    </AppWrapper>
  );
}

export default App;
