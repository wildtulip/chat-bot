import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './List.module.scss'
import ReactFlow, {
  removeElements,
  addEdge,
  // MiniMap,
  // Controls,
  // Background,
  Elements,
  OnLoadParams,
  Edge,
  Connection,
  Position,
  ArrowHeadType,
} from 'react-flow-renderer';

import { BotStep, BotStepLinked } from '../../types/types';

const onLoad = (reactFlowInstance: OnLoadParams) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const List = () => {
  // REQUEST
  const [data, setData] = useState<BotStepLinked[]>([]);
  const [initialElements, setInitialElements] = useState<Elements>([]);
  let [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    axios.get('https://api.host1.dev.webxid.net/1.0/bots/227/steps?search_at=name&query=&page=1')
      .then(function (response) {
        setData(response.data.data.map((step: BotStep) => {
          step.linked_steps = step.linked_steps.map((id) => response.data.data.find((step: BotStep) => step.step_id.toString() === id));
          return step;
        }))

      })
      .catch(function (error) {
        console.log(error);
      })

  }, []);

  useEffect(() => {
    let elementsToRender: Elements = [];

    const calculate = (step: BotStepLinked) => {
      if (typeof (step.depth_level) === 'number') {
        return
      }
      if (step.parent_step_id === 0) {
        step.depth_level = 0;
        return
      }
      const parent = data.find((maybeParent) => step.parent_step_id === maybeParent.step_id)!
      if (typeof (parent.depth_level) !== 'number') {
        calculate(parent) 
      }
      step.depth_level = parent.depth_level! + 1
    }

    const verticalOffset = (step: BotStepLinked) => {
      if (step.parent_step_id === 0) {
        setCounter(counter++);
        step.vertical_offset = counter;
        return
      }
      const parent = data.find((maybeParent) => step.parent_step_id === maybeParent.step_id)!
      const index = parent.linked_steps.findIndex((linkedStep) => step.step_id === linkedStep.step_id);
      step.vertical_offset = index + 1;
    }

    for (const step of data) {
      if (step.parent_step_id === null || step.step_id === null) {
        continue
      }
      calculate(step);
      verticalOffset(step);
      elementsToRender.push({
        id: step.step_id.toString(),
        position: { x: 270 * (step.depth_level! + 1), y: 70 * step.vertical_offset! },
        type: step.depth_level === 0 ? 'input' : 'default',
        data: {
          label: (<><span><b>{step.name}</b></span><br /><span>/{step.command_key}</span></>)
        },
        style: {
          height: 30,
          width: 130,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
      })

    }
    for (const step of data) {
      if (step.parent_step_id === null || step.step_id === null || step.parent_step_id === 0) {
        continue
      }
      elementsToRender.push({
        id: `e${step.parent_step_id}-${step.step_id}`,
        source: step.parent_step_id.toString(),
        target: step.step_id.toString(),
        arrowHeadType: ArrowHeadType.ArrowClosed
      })

    }
    console.log(data);



    setInitialElements(elementsToRender);

  }, [data])



  console.log(initialElements);



  // {
  //   id: '590',
  //   type: 'input',
  //   data: {
  //     label: (
  //       <>
  //         <strong>start</strong><br />
  //         <span>/start</span>
  //       </>
  //     ),
  //   },
  //   position: { x: 400, y: 0 },
  //   style: {
  //     height: 30,
  //     width: 130,
  //   },
  // },





  // REACT FLOW SETTINGS
  // const [elements, setElements] = useState<Elements>(initialElements);
  const onElementsRemove = (elementsToRemove: Elements) =>
    setInitialElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params: Edge | Connection) => setInitialElements((els) => addEdge(params, els));
  // console.log({ elements });


  return (
    <div className={styles.wrapper}>
      <ReactFlow
        elements={initialElements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
      >

        {/* <Controls /> */}
        {/* <Background color="#aaa" gap={24} /> */}
      </ReactFlow>
      {data.map((el, i) => <div key={i} className={styles.listItem}>
        <h3>{el.step_id}</h3>
        <h4 className={styles.key}>/{el.name}</h4>
      </div>)}
    </div>
  )
}


export default List
