import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField() {
  const ref = useRef<any>();
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    random.inSphere(positions, { radius: 1.2 });
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00BFFF"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={2}
        />
      </Points>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="particle-bg">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}