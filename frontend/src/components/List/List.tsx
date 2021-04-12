import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './List.module.scss'
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Elements,
  OnLoadParams,
  Edge,
  Connection,
} from 'react-flow-renderer';
import { initialElements } from './initial-elements';
import { BotStep } from '../../types/types';

const onLoad = (reactFlowInstance: OnLoadParams) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const List = () => {
  // REQUEST
  const [data, setData] = useState<BotStep[]>([]);
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
  console.log(data);


  // REACT FLOW SETTINGS
  const [elements, setElements] = useState<Elements>(initialElements);
  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params: Edge | Connection) => setElements((els) => addEdge(params, els));

  return (
    <div className={styles.wrapper}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return `${n.style.background}`;
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';

            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.style?.background) return `${n.style.background}`;

            return '#fff';
          }}
          nodeBorderRadius={2}
        />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      {data.map((el, i) => <div key={i} className={styles.listItem}>
        <h3>{el.step_id}</h3>
        <h4 className={styles.key}>/{el.name}</h4>
      </div>)}
    </div>
  )
}


export default List
