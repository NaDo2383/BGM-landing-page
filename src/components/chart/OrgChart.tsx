"use client"

import React, { useCallback } from "react"
import ReactFlow, { useNodesState, useEdgesState, addEdge, MarkerType } from "reactflow"
import "reactflow/dist/style.css"
import BoxNode from "./BoxNode"

const initialNodes = [
  { id: "1", type: "box", position: { x: 400, y: 0 }, data: { label: "CEO" } },
  { id: "2", type: "box", position: { x: 400, y: 100 }, data: { label: "Deputy CEO" } },
  { id: "3", type: "box", position: { x: 150, y: 250 }, data: { label: "VP Left" } },
  { id: "4", type: "box", position: { x: 400, y: 250 }, data: { label: "VP Center" } },
  { id: "5", type: "box", position: { x: 650, y: 250 }, data: { label: "VP Right" } },
  { id: "6", type: "box", position: { x: 50, y: 400 }, data: { label: "Manager 1" } },
  { id: "7", type: "box", position: { x: 200, y: 400 }, data: { label: "Manager 2" } },
  { id: "8", type: "box", position: { x: 400, y: 400 }, data: { label: "Manager 3" } },
  { id: "9", type: "box", position: { x: 600, y: 400 }, data: { label: "Manager 4" } },
  { id: "10", type: "box", position: { x: 850, y: 100 }, data: { label: "Dept A" } },
  { id: "11", type: "box", position: { x: 850, y: 150 }, data: { label: "Dept B" } },
  { id: "12", type: "box", position: { x: 850, y: 200 }, data: { label: "Dept C" } },
  { id: "13", type: "box", position: { x: 850, y: 250 }, data: { label: "Dept D" } },
]

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "default", data: { gradient: true } },
  { id: "e2-4", source: "2", target: "4", type: "default", data: { gradient: true } },
  { id: "e4-3", source: "4", target: "3", type: "default", data: { gradient: true } },
  { id: "e4-5", source: "4", target: "5", type: "default", data: { gradient: true } },
  { id: "e2-10", source: "2", target: "10", type: "default", data: { gradient: true } },
  { id: "e2-11", source: "2", target: "11", type: "default", data: { gradient: true } },
  { id: "e2-12", source: "2", target: "12", type: "default", data: { gradient: true } },
  { id: "e2-13", source: "2", target: "13", type: "default", data: { gradient: true } },
  { id: "e4-6", source: "4", target: "6", type: "default", data: { gradient: true } },
  { id: "e4-7", source: "4", target: "7", type: "default", data: { gradient: true } },
  { id: "e4-8", source: "4", target: "8", type: "default", data: { gradient: true } },
  { id: "e4-9", source: "4", target: "9", type: "default", data: { gradient: true } },
]

const nodeTypes = {
  box: BoxNode,
}

const edgeTypes = {
  default: ({ id, sourceX, sourceY, targetX, targetY }: any) => {
    const midX = (sourceX + targetX) / 2
    const midY = (sourceY + targetY) / 2
    const isHorizontal = Math.abs(sourceX - targetX) > Math.abs(sourceY - targetY)

    let path = ""
    if (isHorizontal) {
      path = `M${sourceX},${sourceY} C${midX},${sourceY} ${midX},${targetY} ${targetX},${targetY}`
    } else {
      path = `M${sourceX},${sourceY} C${sourceX},${midY} ${targetX},${midY} ${targetX},${targetY}`
    }

    return (
      <g>
        <defs>
          <linearGradient id={`gradient-${id}`} x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#F1573F' />
            <stop offset='100%' stopColor='#3F61F1' />
          </linearGradient>
        </defs>
        <path
          d={path}
          stroke={`url(#gradient-${id})`}
          strokeWidth={2}
          fill='none'
          markerEnd='url(#dot)'
        />
      </g>
    )
  },
}

export default function OrgChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  )

  return (
    <div
      className='h-[800px] relative overflow-hidden pointer-events-auto bg-[#050b1b]'
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}>
      <div className='absolute h-[800px] w-full z-10'></div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        preventScrolling={false}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={{
          markerEnd: { type: MarkerType.Arrow, width: 6, height: 6, color: "#3F61F1" },
        }}
      />
    </div>
  )
}
