import React from 'react';
import { ArrowHeadType, Elements } from 'react-flow-renderer';

export const initialElements: Elements = [
  {
    id: '590',
    type: 'input',
    data: {
      label: (
        <>
          <strong>start</strong><br />
          <span>/start</span>
        </>
      ),
    },
    position: { x: 400, y: 0 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '591',
    data: {
      label: (
        <>
          <strong>stop</strong><br />
          <span>/stop</span>
        </>
      ),
    },
    position: { x: 0, y: 75 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '616',
    data: {
      label: (
        <>
          <strong>asd</strong><br />
          <span>/__f8dc0d06249a7e82</span>
        </>
      ),
    },
    position: { x: 160, y: 150 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '617',
    data: {
      label: (
        <>
          <strong>dxx2</strong><br />
          <span>/__8f9a92882a08835b</span>
        </>
      ),
    },
    position: { x: 320, y: 150 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '618',
    data: {
      label: (
        <>
          <strong>asdasdx</strong><br />
          <span>/__4be16709b6b28a25</span>
        </>
      ),
    },
    position: { x: 480, y: 150 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '619',
    data: {
      label: (
        <>
          <strong>asddasd</strong><br />
          <span>/__0d80b538c3a7ee8c</span>
        </>
      ),
    },
    position: { x: 640, y: 150 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '620',
    data: {
      label: (
        <>
          <strong>tellbot.pro</strong><br />
          <span>https://tellbot.pro</span>
        </>
      ),
    },
    position: { x: 800, y: 150 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '592',
    data: {
      label: (
        <>
          <strong>fdsgdfsgdf</strong><br />
          <span>https://api.host3.dev.webxid.net/1.0/</span>
        </>
      ),
    },
    position: { x: 0, y: 300 },
    style: {
      height: 30,
      width: 190,
    },
  },
  {
    id: '597',
    data: {
      label: (
        <>
          <strong>help</strong><br />
          <span>/help</span>
        </>
      ),
    },
    position: { x: 230, y: 300 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '604',
    data: {
      label: (
        <>
          <strong>B</strong><br />
          <span>/__a0cdde0b42f9945e</span>
        </>
      ),
    },
    position: { x: 390, y: 300 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '614',
    data: {
      label: (
        <>
          <strong>1</strong><br />
          <span>/2</span>
        </>
      ),
    },
    position: { x: 550, y: 300 },
    style: {
      height: 30,
      width: 130,
    },
  },
  {
    id: '615',
    data: {
      label: (
        <>
          <strong>2</strong><br />
          <span>/4</span>
        </>
      ),
    },
    position: { x: 710, y: 300 },
    style: {
      height: 30,
      width: 130,
    },
  },

  {
    id: 'e590-591',
    source: '590',
    target: '591',
    arrowHeadType: ArrowHeadType.ArrowClosed
  },
  {
    id: 'e590-616',
    source: '590',
    target: '616',
    arrowHeadType: ArrowHeadType.ArrowClosed
  },
  {
    id: 'e590-617',
    source: '590',
    target: '617',
    arrowHeadType: ArrowHeadType.ArrowClosed
  },
  {
    id: 'e590-618',
    source: '590',
    target: '618',
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e590-619',
    source: '590',
    target: '619',
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e590-620',
    source: '590',
    target: '620',
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e591-590',
    source: '591',
    target: '590',
    arrowHeadType: ArrowHeadType.ArrowClosed,
    style: { stroke: '#f6ab6c' },
  },
  {
    id: 'e591-616',
    source: '591',
    target: '616',
    arrowHeadType: ArrowHeadType.ArrowClosed,
    style: { stroke: '#f6ab6c' },
  },
];