import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimatedCharacterProps {
  onHoverStateChange?: (alert: boolean) => void;
  showGlasses?: boolean;
}

const CharacterModel: React.FC<{
  onHoverStateChange?: (alert: boolean) => void;
  showGlasses?: boolean;
}> = ({ onHoverStateChange, showGlasses = true }) => {
  const meshRef = useRef<THREE.Group>(null);
  const steamGroup = useRef<THREE.Group>(null);

  const [hovered, setHovered] = useState(false);
  const [blinkProgress, setBlinkProgress] = useState(0); // 0 = open, 1 = closed

  // Natural irregular blinking system
  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;
    let isBlinking = false;

    const triggerBlink = () => {
      if (isBlinking) return;
      isBlinking = true;

      // Quick eyelid closing and opening (~140ms)
      const startTime = performance.now();
      const blinkDuration = 140;

      const animateBlink = (now: number) => {
        const elapsed = now - startTime;
        if (elapsed < blinkDuration) {
          const t = elapsed / blinkDuration;
          // Triangle wave for smooth blink
          const progress = t < 0.5 ? t * 2 : (1 - t) * 2;
          setBlinkProgress(progress);
          requestAnimationFrame(animateBlink);
        } else {
          setBlinkProgress(0);
          isBlinking = false;
          // Schedule next irregular blink (every 3 to 6.5 seconds, or double-blink)
          const nextInterval = Math.random() < 0.25 ? 250 : Math.random() * 3500 + 2500;
          blinkTimeout = setTimeout(triggerBlink, nextInterval);
        }
      };

      requestAnimationFrame(animateBlink);
    };

    blinkTimeout = setTimeout(triggerBlink, 2000);
    return () => clearTimeout(blinkTimeout);
  }, []);

  // Load high-res texture with crisp linear filtering
  const texture = useRef<THREE.Texture | null>(null);
  if (!texture.current) {
    const loader = new THREE.TextureLoader();
    texture.current = loader.load('/character_siri.png');
    texture.current.colorSpace = THREE.SRGBColorSpace;
    texture.current.minFilter = THREE.LinearMipmapLinearFilter;
    texture.current.magFilter = THREE.LinearFilter;
  }

  const { viewport } = useThree();
  // Responsive character scale: ~80-88% of viewport height
  const characterHeight = Math.min(viewport.height * 0.88, 7.8);
  const characterWidth = characterHeight * (640 / 960); // Aspect ratio matching artwork

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const { pointer } = state;

    if (meshRef.current) {
      // 1. Organic Breathing & Weight Shift + Subtle Natural Blink Micro-Motion
      const breathBob = Math.sin(time * 1.5) * 0.04 - (blinkProgress * 0.01);
      const breathSway = Math.sin(time * 0.75) * 0.02;
      meshRef.current.position.y = -characterHeight * 0.44 + breathBob;
      meshRef.current.position.x = breathSway;

      // 2. 3D Head & Torso Tilt Tracking Cursor with Spring Dampening
      const targetRotY = hovered ? pointer.x * 0.22 : pointer.x * 0.1;
      const targetRotX = hovered ? -pointer.y * 0.16 : -pointer.y * 0.05 + (blinkProgress * 0.02);
      const targetRollZ = hovered ? -pointer.x * 0.08 : Math.sin(time * 0.6) * 0.015;

      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, targetRotY, 4, delta);
      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, targetRotX, 4, delta);
      meshRef.current.rotation.z = THREE.MathUtils.damp(meshRef.current.rotation.z, targetRollZ, 4, delta);
    }

    // 3. Subtle Rising Steam Particles from Ceramic Mug
    if (steamGroup.current) {
      steamGroup.current.children.forEach((wisp, i) => {
        wisp.position.y = ((time * 0.35 + i * 0.3) % 0.8);
        wisp.position.x = Math.sin(time * 2 + i) * 0.05 + (i * 0.08);
        const opacity = 1 - (wisp.position.y / 0.8);
        if ((wisp as THREE.Mesh).material) {
          ((wisp as THREE.Mesh).material as THREE.Material).opacity = Math.max(0, opacity * 0.35);
        }
      });
    }
  });

  return (
    <group
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
        onHoverStateChange?.(true);
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
        onHoverStateChange?.(false);
      }}
    >
      {/* Main Character Layer in 3D Space */}
      <group ref={meshRef}>
        {/* Animated Movie Character Texture Plane */}
        <mesh position={[0, characterHeight * 0.5, 0]}>
          <planeGeometry args={[characterWidth, characterHeight]} />
          <meshStandardMaterial
            map={texture.current}
            transparent={true}
            alphaTest={0.01}
            roughness={0.65}
            metalness={0.05}
          />
        </mesh>

        {/* Optional Round Spectacles (Parented to Exact Eye Level at characterHeight * 0.925) */}
        {showGlasses && (
          <group position={[-0.01, characterHeight * 0.925, 0.08]}>
            {/* Left Lens Wireframe Ring */}
            <mesh position={[-0.09, 0, 0]}>
              <torusGeometry args={[0.075, 0.008, 16, 36]} />
              <meshStandardMaterial color="#1B1A19" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Right Lens Wireframe Ring */}
            <mesh position={[0.085, 0, 0]}>
              <torusGeometry args={[0.075, 0.008, 16, 36]} />
              <meshStandardMaterial color="#1B1A19" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Bridge */}
            <mesh position={[-0.002, 0.005, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.006, 0.006, 0.1, 12]} />
              <meshStandardMaterial color="#1B1A19" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        )}

        {/* Rising Steam Tendrils from the BTS Ceramic Mug Rim */}
        <group ref={steamGroup} position={[-0.22, characterHeight * 0.38, 0.12]}>
          {[0, 1, 2].map((idx) => (
            <mesh key={idx} position={[idx * 0.09, 0, 0]}>
              <cylinderGeometry args={[0.018, 0.006, 0.35, 8]} />
              <meshBasicMaterial color="#FAF7F2" transparent opacity={0.3} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Elegant Ambient Floor Shadow */}
      <mesh position={[0, -characterHeight * 0.44, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[characterWidth * 0.7, 36]} />
        <meshBasicMaterial color="#EAE2D4" transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

export const AnimatedCharacterScene: React.FC<AnimatedCharacterProps> = ({
  onHoverStateChange,
  showGlasses = false
}) => {
  return (
    <div style={{
      width: '100vw',
      height: '100dvh',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'var(--bg)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Soft Warm Ivory Ambient Base Light */}
        <ambientLight intensity={1.1} color="#FAF7F2" />

        {/* High-End Studio Key Light (Front Right, Warm Temperature) */}
        <directionalLight
          position={[3.5, 4.5, 4]}
          intensity={1.3}
          color="#FFF9F2"
        />

        {/* Soft Fill Light (Left, Neutral Ivory) */}
        <directionalLight
          position={[-3.5, 2, 3]}
          intensity={0.7}
          color="#F5EEE4"
        />

        {/* Vivid Editorial Magenta Rim Backlight (Grazing Hair & Saree) */}
        <directionalLight
          position={[-2.8, 3.5, -2.5]}
          intensity={2.2}
          color="#D81B60"
        />

        {/* Warm Studio Top Light */}
        <pointLight
          position={[0, 4, 1.5]}
          intensity={0.8}
          color="#FFFDF9"
        />

        <CharacterModel
          onHoverStateChange={onHoverStateChange}
          showGlasses={showGlasses}
        />
      </Canvas>
    </div>
  );
};
