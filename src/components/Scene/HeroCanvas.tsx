import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ChibiSiriCharacter } from './PlaceholderCharacter';

interface HeroCanvasProps {
  onHoverStateChange?: (hovered: boolean) => void;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ onHoverStateChange }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      minHeight: '480px'
    }}>
      <Canvas
        camera={{ position: [0, 0.28, 4.3], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Soft Warm Ivory Ambient Base */}
        <ambientLight intensity={0.95} color="#FAF7F2" />

        {/* Studio Key Light (Front Right, Warm Tone) */}
        <directionalLight
          position={[3, 4, 3]}
          intensity={1.2}
          color="#FFF9F0"
        />

        {/* Soft Fill Light (Left) */}
        <directionalLight
          position={[-3, 2, 2]}
          intensity={0.65}
          color="#F2EBE0"
        />

        {/* Editorial Accent Rim Light (Back Left, Vivid Magenta from Siri's Saree) */}
        <directionalLight
          position={[-2.5, 3, -2.5]}
          intensity={1.9}
          color="#D81B60"
        />

        <Suspense fallback={null}>
          <ChibiSiriCharacter onHoverChange={onHoverStateChange} />
        </Suspense>
      </Canvas>
    </div>
  );
};
