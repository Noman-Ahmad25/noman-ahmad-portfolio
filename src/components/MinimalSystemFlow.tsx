import React from 'react';
import './MinimalSystemFlow.css';

interface FlowNode {
  step: string;
  name: string;
  detail: string;
}

const FLOW_NODES: FlowNode[] = [
  { step: '01', name: 'Client Request', detail: 'REST & WebSocket' },
  { step: '02', name: 'Deterministic Gate', detail: 'Validation & Rules' },
  { step: '03', name: 'Database Layer', detail: 'PostgreSQL & RBAC' },
  { step: '04', name: 'LLM Reasoning', detail: 'Gemini API' },
  { step: '05', name: 'Structured Result', detail: 'Type-Safe Output' },
];

export const MinimalSystemFlow: React.FC = () => {
  return (
    <div className="flow-wrapper" aria-label="System Pipeline Overview">
      <div className="flow-meta">
        <span className="flow-label font-mono">System Pipeline</span>
        <span className="flow-status font-mono">
          <span className="pulse-indicator" /> Deterministic First
        </span>
      </div>

      <div className="flow-track">
        {FLOW_NODES.map((node, index) => (
          <React.Fragment key={node.step}>
            <div className="flow-node">
              <span className="flow-node-step font-mono">{node.step}</span>
              <span className="flow-node-name">{node.name}</span>
              <span className="flow-node-detail font-mono">{node.detail}</span>
            </div>

            {index < FLOW_NODES.length - 1 && (
              <div className="flow-wire" aria-hidden="true">
                <span className="wire-line" />
                <span className="wire-pulse" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
