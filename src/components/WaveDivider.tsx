interface WaveDividerProps {
  color?: string;
  flip?: boolean;
}

export default function WaveDivider({ color = '#FFFAF5', flip = false }: WaveDividerProps) {
  return (
    <div
      className="wave-divider"
      style={{
        transform: flip ? 'rotate(180deg)' : 'none',
        marginTop: flip ? '-1px' : '0',
        marginBottom: flip ? '0' : '-1px',
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '80px', display: 'block' }}
      >
        <path
          fill={color}
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,90 1200,60 L1200,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
