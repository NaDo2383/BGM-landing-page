// components/BoxNode.tsx
import { Handle, Position, NodeProps } from "reactflow"

const invisibleHandleStyle: React.CSSProperties = {
  opacity: 0,
  pointerEvents: "none",
}

const BoxNode = ({ data }: NodeProps) => (
  <div className='bg-white text-black rounded-md px-4 py-2 shadow relative text-center'>
    <div className='text-sm'>{data.label}</div>

    <Handle type='target' position={Position.Top} id='top' style={invisibleHandleStyle} />
    <Handle
      type='source'
      position={Position.Right}
      id='right'
      style={invisibleHandleStyle}
    />
    <Handle
      type='source'
      position={Position.Bottom}
      id='bottom'
      style={invisibleHandleStyle}
    />
    <Handle
      type='source'
      position={Position.Left}
      id='left'
      style={invisibleHandleStyle}
    />
  </div>
)

export default BoxNode
