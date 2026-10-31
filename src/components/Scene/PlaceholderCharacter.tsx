import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ChibiSiriProps {
  onHoverChange?: (hovered: boolean) => void;
}

export const ChibiSiriCharacter: React.FC<ChibiSiriProps> = ({ onHoverChange }) => {
  const [hovered, setHovered] = useState(false);
  const characterGroup = useRef<THREE.Group>(null);
  const headGroup = useRef<THREE.Group>(null);
  const leftEyelid = useRef<THREE.Mesh>(null);
  const rightEyelid = useRef<THREE.Mesh>(null);
  const leftPupil = useRef<THREE.Group>(null);
  const rightPupil = useRef<THREE.Group>(null);
  const steamGroup = useRef<THREE.Group>(null);
  const hairBackGroup = useRef<THREE.Group>(null);

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
    onHoverChange?.(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'default';
    onHoverChange?.(false);
  };

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const { pointer } = state;

    // Gentle breathing bob
    if (characterGroup.current) {
      characterGroup.current.position.y = Math.sin(time * 1.6) * 0.025 - 0.15;
    }

    // Head rotation, tilt and gaze tracking
    if (headGroup.current) {
      const targetRotY = hovered ? pointer.x * 0.45 : pointer.x * 0.18;
      const targetRotX = hovered ? -pointer.y * 0.28 : -pointer.y * 0.08;
      const targetTiltZ = hovered ? -pointer.x * 0.18 : Math.sin(time * 0.8) * 0.02; // Playful tilt

      headGroup.current.rotation.y = THREE.MathUtils.damp(headGroup.current.rotation.y, targetRotY, 5, delta);
      headGroup.current.rotation.x = THREE.MathUtils.damp(headGroup.current.rotation.x, targetRotX, 5, delta);
      headGroup.current.rotation.z = THREE.MathUtils.damp(headGroup.current.rotation.z, targetTiltZ, 5, delta);
    }

    // Secondary subtle hair sway
    if (hairBackGroup.current) {
      hairBackGroup.current.rotation.z = Math.sin(time * 1.2) * 0.03;
    }

    // Eye Opening Morph Target (Sleepy relaxed vs Alert awake)
    const targetEyelidScaleY = hovered ? 0.08 : 0.95;
    if (leftEyelid.current && rightEyelid.current) {
      leftEyelid.current.scale.y = THREE.MathUtils.damp(leftEyelid.current.scale.y, targetEyelidScaleY, 8, delta);
      rightEyelid.current.scale.y = THREE.MathUtils.damp(rightEyelid.current.scale.y, targetEyelidScaleY, 8, delta);
    }

    // Pupil gaze tracking following cursor
    if (leftPupil.current && rightPupil.current) {
      const pupilX = hovered ? pointer.x * 0.025 : 0;
      const pupilY = hovered ? pointer.y * 0.025 : -0.005;

      leftPupil.current.position.x = THREE.MathUtils.damp(leftPupil.current.position.x, pupilX, 10, delta);
      leftPupil.current.position.y = THREE.MathUtils.damp(leftPupil.current.position.y, pupilY, 10, delta);

      rightPupil.current.position.x = THREE.MathUtils.damp(rightPupil.current.position.x, pupilX, 10, delta);
      rightPupil.current.position.y = THREE.MathUtils.damp(rightPupil.current.position.y, pupilY, 10, delta);
    }

    // Rising steam animation from ceramic mug
    if (steamGroup.current) {
      steamGroup.current.children.forEach((wisp, i) => {
        wisp.position.y = 0.35 + (Math.sin(time * 2.2 + i * 1.2) * 0.06);
        wisp.scale.x = 1 + Math.sin(time * 3 + i) * 0.2;
      });
    }
  });

  return (
    <group
      ref={characterGroup}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      position={[0, -0.1, 0]}
    >
      {/* =================================================================
          HEAD HIERARCHY (Chibi proportions inspired by Siri's portrait)
          ================================================================= */}
      <group ref={headGroup} position={[0, 0.45, 0]}>
        {/* Soft Warm Complexion Chibi Head */}
        <mesh position={[0, 0.38, 0]}>
          <sphereGeometry args={[0.58, 36, 36]} />
          <meshStandardMaterial
            color="#EAC8AB"
            roughness={0.7}
            metalness={0.02}
          />
        </mesh>

        {/* Delicate Forehead Bindi Dot (Authentic to Siri's Photo) */}
        <mesh position={[0, 0.52, 0.57]}>
          <circleGeometry args={[0.016, 16]} />
          <meshBasicMaterial color="#7A1828" />
        </mesh>

        {/* Gentle Warm Smile */}
        <mesh position={[0, 0.23, 0.56]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.045, 0.008, 12, 18, Math.PI * 0.9]} />
          <meshBasicMaterial color="#9C4444" />
        </mesh>

        {/* Soft Rosy Cheeks (Editorial Magenta tint) */}
        <mesh position={[-0.28, 0.28, 0.49]} rotation={[0, -0.4, 0]}>
          <circleGeometry args={[0.075, 24]} />
          <meshBasicMaterial color="#D81B60" transparent opacity={0.32} />
        </mesh>
        <mesh position={[0.28, 0.28, 0.49]} rotation={[0, 0.4, 0]}>
          <circleGeometry args={[0.075, 24]} />
          <meshBasicMaterial color="#D81B60" transparent opacity={0.32} />
        </mesh>

        {/* -------------------------------------------------------------
            EYES (Sleepy relaxed default, opens wide on hover)
            ------------------------------------------------------------- */}
        {/* Left Eye */}
        <group position={[-0.2, 0.38, 0.52]}>
          <mesh>
            <sphereGeometry args={[0.09, 20, 20]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
          {/* Pupil with warm brown & magenta glint */}
          <group ref={leftPupil} position={[0, 0, 0.072]}>
            <mesh>
              <sphereGeometry args={[0.046, 20, 20]} />
              <meshBasicMaterial color="#221B18" />
            </mesh>
            {/* Catchlight */}
            <mesh position={[0.015, 0.015, 0.04]}>
              <sphereGeometry args={[0.014, 12, 12]} />
              <meshBasicMaterial color="#FFFFFF" />
            </mesh>
            <mesh position={[-0.012, -0.012, 0.038]}>
              <sphereGeometry args={[0.008, 12, 12]} />
              <meshBasicMaterial color="#D81B60" />
            </mesh>
          </group>
          {/* Sleepy Eyelid */}
          <mesh ref={leftEyelid} position={[0, 0.035, 0.082]}>
            <sphereGeometry args={[0.096, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.56]} />
            <meshStandardMaterial color="#DEC0A4" roughness={0.7} />
          </mesh>
        </group>

        {/* Right Eye */}
        <group position={[0.2, 0.38, 0.52]}>
          <mesh>
            <sphereGeometry args={[0.09, 20, 20]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
          {/* Pupil */}
          <group ref={rightPupil} position={[0, 0, 0.072]}>
            <mesh>
              <sphereGeometry args={[0.046, 20, 20]} />
              <meshBasicMaterial color="#221B18" />
            </mesh>
            {/* Catchlight */}
            <mesh position={[0.015, 0.015, 0.04]}>
              <sphereGeometry args={[0.014, 12, 12]} />
              <meshBasicMaterial color="#FFFFFF" />
            </mesh>
            <mesh position={[-0.012, -0.012, 0.038]}>
              <sphereGeometry args={[0.008, 12, 12]} />
              <meshBasicMaterial color="#D81B60" />
            </mesh>
          </group>
          {/* Sleepy Eyelid */}
          <mesh ref={rightEyelid} position={[0, 0.035, 0.082]}>
            <sphereGeometry args={[0.096, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.56]} />
            <meshStandardMaterial color="#DEC0A4" roughness={0.7} />
          </mesh>
        </group>

        {/* -------------------------------------------------------------
            ROUND SPECTACLES (Firmly anchored to the nasal bridge & temples)
            ------------------------------------------------------------- */}
        <group position={[0, 0.38, 0.585]}>
          {/* Left Round Frame */}
          <mesh position={[-0.2, 0, 0]}>
            <torusGeometry args={[0.13, 0.013, 16, 36]} />
            <meshStandardMaterial color="#1B1A19" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Right Round Frame */}
          <mesh position={[0.2, 0, 0]}>
            <torusGeometry args={[0.13, 0.013, 16, 36]} />
            <meshStandardMaterial color="#1B1A19" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Nose Bridge */}
          <mesh position={[0, 0.01, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.01, 0.01, 0.15, 12]} />
            <meshStandardMaterial color="#1B1A19" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Temples */}
          <mesh position={[-0.34, 0, -0.15]} rotation={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.3, 8]} />
            <meshStandardMaterial color="#1B1A19" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0.34, 0, -0.15]} rotation={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.3, 8]} />
            <meshStandardMaterial color="#1B1A19" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>

        {/* -------------------------------------------------------------
            HAIRSTYLE (Long dark wavy hair inspired by Siri's portrait)
            ------------------------------------------------------------- */}
        {/* Hair Cap & Crown */}
        <mesh position={[0, 0.48, -0.06]}>
          <sphereGeometry args={[0.61, 32, 32]} />
          <meshStandardMaterial color="#1E1916" roughness={0.7} />
        </mesh>

        {/* Middle-parted Bangs Framing Face */}
        <mesh position={[-0.2, 0.58, 0.35]} rotation={[0.2, 0.25, -0.15]}>
          <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
          <meshStandardMaterial color="#1E1916" roughness={0.7} />
        </mesh>
        <mesh position={[0.2, 0.58, 0.35]} rotation={[0.2, -0.25, 0.15]}>
          <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
          <meshStandardMaterial color="#1E1916" roughness={0.7} />
        </mesh>

        {/* Left Side Hair Lock */}
        <mesh position={[-0.34, 0.2, 0.15]} rotation={[0.1, 0.1, -0.1]}>
          <capsuleGeometry args={[0.11, 0.55, 8, 16]} />
          <meshStandardMaterial color="#1E1916" roughness={0.7} />
        </mesh>

        {/* Right Cascading Hair Lock (Inspired by Siri's photo) */}
        <mesh position={[0.34, 0.18, 0.18]} rotation={[0.15, -0.15, 0.1]}>
          <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
          <meshStandardMaterial color="#1E1916" roughness={0.7} />
        </mesh>

        {/* Soft Flowing Back Hair */}
        <group ref={hairBackGroup} position={[0, 0.15, -0.22]}>
          <mesh position={[-0.12, -0.1, 0]}>
            <capsuleGeometry args={[0.14, 0.55, 8, 16]} />
            <meshStandardMaterial color="#1A1512" roughness={0.75} />
          </mesh>
          <mesh position={[0.12, -0.1, 0]}>
            <capsuleGeometry args={[0.14, 0.55, 8, 16]} />
            <meshStandardMaterial color="#1A1512" roughness={0.75} />
          </mesh>
        </group>
      </group>

      {/* =================================================================
          TORSO & COZY OUTFIT (Ivory knit with subtle magenta drape)
          ================================================================= */}
      <group position={[0, 0.05, 0]}>
        {/* Soft cozy warm ivory knit sweater */}
        <mesh position={[0, -0.05, -0.05]}>
          <cylinderGeometry args={[0.38, 0.58, 0.68, 32]} />
          <meshStandardMaterial color="#FAF5ED" roughness={0.85} />
        </mesh>

        {/* Magenta Shawl/Saree-inspired Drape (Nod to Siri's photograph) */}
        <mesh position={[-0.22, -0.02, 0.02]} rotation={[0.1, 0.3, -0.3]}>
          <capsuleGeometry args={[0.12, 0.62, 8, 16]} />
          <meshStandardMaterial color="#D81B60" roughness={0.6} />
        </mesh>
      </group>

      {/* =================================================================
          OVERSIZED WHITE CERAMIC COFFEE MUG WITH WARM COFFEE & STEAM
          ================================================================= */}
      <group position={[0, -0.08, 0.52]} rotation={[0.08, -0.04, 0]}>
        {/* Glossy White Ceramic Mug Body */}
        <mesh>
          <cylinderGeometry args={[0.32, 0.28, 0.48, 36]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.1}
            metalness={0.02}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
          />
        </mesh>

        {/* Mug Handle */}
        <mesh position={[0.34, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.14, 0.042, 16, 32, Math.PI * 1.1]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.1}
            metalness={0.02}
            clearcoat={1.0}
          />
        </mesh>

        {/* Rich Coffee Surface */}
        <mesh position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.3, 32]} />
          <meshStandardMaterial color="#251610" roughness={0.25} metalness={0.05} />
        </mesh>

        {/* Animated Steam Tendrils */}
        <group ref={steamGroup} position={[0, 0.25, 0]}>
          <mesh position={[-0.07, 0, 0]}>
            <cylinderGeometry args={[0.015, 0.005, 0.26, 8]} />
            <meshBasicMaterial color="#FAF7F2" transparent opacity={0.35} />
          </mesh>
          <mesh position={[0.07, 0.05, 0]}>
            <cylinderGeometry args={[0.015, 0.005, 0.32, 8]} />
            <meshBasicMaterial color="#FAF7F2" transparent opacity={0.4} />
          </mesh>
        </group>
      </group>

      {/* =================================================================
          HANDS EMBRACING MUG
          ================================================================= */}
      <mesh position={[-0.32, -0.06, 0.48]} rotation={[0.2, 0.6, -0.2]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#EAC8AB" roughness={0.7} />
      </mesh>
      <mesh position={[0.3, -0.06, 0.48]} rotation={[0.2, -0.6, 0.2]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#EAC8AB" roughness={0.7} />
      </mesh>

      {/* Base Plinth Shadow */}
      <mesh position={[0, -0.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2, 36]} />
        <meshStandardMaterial color="#EAE2D4" roughness={0.9} />
      </mesh>
    </group>
  );
};
