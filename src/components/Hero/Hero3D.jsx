import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PresentationControls, Stars } from '@react-three/drei';

function SpinningTorus() {
    const meshRef = useRef();
    useFrame((_state, delta) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x += delta * 0.3;
        meshRef.current.rotation.y += delta * 0.4;
    });
    return (
        <mesh ref={meshRef} castShadow>
            <torusKnotGeometry args={[1.1, 0.35, 180, 32]} />
            <meshStandardMaterial color="#6366f1" metalness={0.5} roughness={0.2} />
        </mesh>
    );
}

export default function Hero3D() {
    return (
        <div className="w-full h-[420px] sm:h-[520px] rounded-2xl overflow-hidden">
            <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <directionalLight castShadow position={[4, 6, 5]} intensity={1.1} />
                <Suspense fallback={null}>
                    <Stars radius={60} depth={30} count={3000} factor={4} saturation={0} fade speed={1} />
                    <PresentationControls global polar={[-0.4, 0.4]} azimuth={[-0.6, 0.6]}>
                        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
                            <SpinningTorus />
                        </Float>
                        <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.0}>
                            <mesh position={[-2.2, -0.6, 0]}>
                                <icosahedronGeometry args={[0.6, 0]} />
                                <meshStandardMaterial color="#22d3ee" metalness={0.2} roughness={0.3} />
                            </mesh>
                        </Float>
                        <Float speed={1.0} rotationIntensity={0.5} floatIntensity={0.8}>
                            <mesh position={[2.4, 0.8, -0.6]}>
                                <sphereGeometry args={[0.5, 32, 32]} />
                                <meshStandardMaterial color="#f43f5e" metalness={0.3} roughness={0.25} />
                            </mesh>
                        </Float>
                    </PresentationControls>
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}


