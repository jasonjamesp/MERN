import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';

const nodeTypes = {
  custom: CustomNode,
};

const RoadmapFlow = ({ initialNodes, initialEdges }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update when props change
  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      attributionPosition="bottom-right"
    >
      <Controls style={{ background: '#1e293b', fill: '#e2e8f0', color: '#e2e8f0' }} />
      <MiniMap 
        nodeColor={(node) => {
          return '#6366f1';
        }}
        nodeStrokeWidth={3}
        zoomable
        pannable
        style={{ background: '#151b2b', border: '1px solid #1e293b' }}
      />
      <Background color="#1e293b" gap={16} size={1} />
    </ReactFlow>
  );
};

export default RoadmapFlow;
