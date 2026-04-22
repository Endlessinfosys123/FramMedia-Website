"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface FrameProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  delay: number;
}

function Frame({ position, rotation, scale, color, delay }: FrameProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() + delay;
    
    // Smooth idle floating
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2;
    meshRef.current.rotation.x = rotation[0] + Math.cos(time * 0.3) * 0.1;
    meshRef.current.rotation.y = rotation[1] + Math.sin(time * 0.2) * 0.1;

    // Subtle mouse follow
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    meshRef.current.rotation.y += mouseX * 0.5;
    meshRef.current.rotation.x -= mouseY * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[1, 1.4, 0.1]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.05}
        />
        {/* Inner Border Frame */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[0.85, 1.25, 0.01]} />
          <meshStandardMaterial color="#ffffff" roughness={0.9} />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const frames = useMemo(() => [
    { position: [-1.5, 1, -2], rotation: [0.2, 0.5, 0], scale: [1.2, 1.2, 1.2], color: "#D4AF37", delay: 0 },
    { position: [1.5, -0.5, -1], rotation: [-0.3, -0.4, 0.1], scale: [1, 1, 1], color: "#FFFFFF", delay: 2 },
    { position: [-0.5, -1.5, -3], rotation: [0.5, -0.2, -0.2], scale: [1.5, 1.5, 1.5], color: "#0F0F0F", delay: 4 },
  ], []);

  return (
    <div className="w-full h-full">
      <Canvas shadows gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        {/* Lights */}
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#D4AF37" />
        
        <Environment preset="studio" />

        <group position={[0, 0, 0]}>
          {frames.map((frame, i) => (
            <Frame key={i} {...frame} />
          ))}
        </group>

        <ContactShadows 
          position={[0, -3, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2.5} 
          far={4.5} 
        />
      </Canvas>
    </div>
  );
}
