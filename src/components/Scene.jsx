import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, ContactShadows, Stars, Cloud, Text, Sparkles, Sky } from '@react-three/drei';

const Building = () => {
    return (
        <group position={[0, 0, 0]}>
            {/* Main Structure */}
            <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
                <boxGeometry args={[4, 3, 3]} />
                <meshStandardMaterial color="#ffcc80" roughness={0.3} />
            </mesh>

            {/* Roof */}
            <mesh position={[0, 3.75, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
                <coneGeometry args={[3.5, 1.5, 4]} />
                <meshStandardMaterial color="#ef5350" roughness={0.3} />
            </mesh>

            {/* Door */}
            <mesh position={[0, 0.75, 1.55]} castShadow>
                <boxGeometry args={[1, 1.5, 0.1]} />
                <meshStandardMaterial color="#8d6e63" />
            </mesh>
            <mesh position={[0.3, 0.75, 1.6]} castShadow>
                <sphereGeometry args={[0.05]} />
                <meshStandardMaterial color="#ffd700" />
            </mesh>

            {/* Windows */}
            <group position={[0, 0, 0]}>
                <mesh position={[-1.2, 2, 1.55]}>
                    <boxGeometry args={[0.8, 0.8, 0.1]} />
                    <meshStandardMaterial color="#90caf9" emissive="#90caf9" emissiveIntensity={0.2} />
                </mesh>
                <mesh position={[1.2, 2, 1.55]}>
                    <boxGeometry args={[0.8, 0.8, 0.1]} />
                    <meshStandardMaterial color="#90caf9" emissive="#90caf9" emissiveIntensity={0.2} />
                </mesh>
            </group>

            {/* Steps */}
            <mesh position={[0, 0.1, 1.8]} receiveShadow>
                <boxGeometry args={[1.5, 0.2, 0.6]} />
                <meshStandardMaterial color="#bdbdbd" />
            </mesh>
        </group>
    );
};

const Tree = ({ position, scale = 1 }) => {
    return (
        <group position={position} scale={scale}>
            <mesh position={[0, 0.75, 0]} castShadow>
                <cylinderGeometry args={[0.2, 0.2, 1.5]} />
                <meshStandardMaterial color="#795548" />
            </mesh>
            <mesh position={[0, 2, 0]} castShadow>
                <coneGeometry args={[1, 2, 8]} />
                <meshStandardMaterial color="#66bb6a" />
            </mesh>
            <mesh position={[0, 2.8, 0]} castShadow>
                <coneGeometry args={[0.8, 1.5, 8]} />
                <meshStandardMaterial color="#81c784" />
            </mesh>
        </group>
    );
};

const Balloons = () => {
    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[-4, 4, -5]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#ff5252" roughness={0.2} />
                </mesh>
                <mesh position={[-4, 2.5, -5]}>
                    <cylinderGeometry args={[0.02, 0.02, 3]} />
                    <meshBasicMaterial color="white" transparent opacity={0.5} />
                </mesh>
            </Float>
            <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.2}>
                <mesh position={[5, 6, -8]} castShadow>
                    <sphereGeometry args={[0.7, 32, 32]} />
                    <meshStandardMaterial color="#448aff" roughness={0.2} />
                </mesh>
                <mesh position={[5, 4, -8]}>
                    <cylinderGeometry args={[0.02, 0.02, 4]} />
                    <meshBasicMaterial color="white" transparent opacity={0.5} />
                </mesh>
            </Float>
            <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
                <mesh position={[0, 9, -12]} castShadow>
                    <sphereGeometry args={[0.9, 32, 32]} />
                    <meshStandardMaterial color="#ffeb3b" roughness={0.2} />
                </mesh>
                <mesh position={[0, 6.5, -12]}>
                    <cylinderGeometry args={[0.02, 0.02, 5]} />
                    <meshBasicMaterial color="white" transparent opacity={0.5} />
                </mesh>
            </Float>
        </group>
    );
};

const Scene = () => {
    return (
        <Canvas shadows className="h-full w-full" dpr={[1, 2]} camera={{ position: [8, 5, 12], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />
            <Environment preset="sunset" />
            <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.5} mieCoefficient={0.005} mieDirectionalG={0.8} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#4fc3f7" />

            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
                <Building />
                <Text
                    position={[0, 6, 0]}
                    fontSize={1.5}
                    color="#3f51b5"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                >
                    KiddoSchool
                </Text>
            </Float>

            <Balloons />

            <Tree position={[-4, 0, 2]} scale={1.2} />
            <Tree position={[4, 0, -1]} scale={0.9} />
            <Tree position={[-3, 0, -3]} scale={1.1} />
            <Tree position={[5, 0, 3]} scale={0.8} />

            {/* Floating Shapes for 3D Design Aesthetic */}
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-6, 5, -2]} castShadow>
                    <torusGeometry args={[0.8, 0.2, 16, 100]} />
                    <meshStandardMaterial color="#ff4081" roughness={0.2} metalness={0.5} />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
                <mesh position={[6, 8, -4]} castShadow>
                    <octahedronGeometry args={[1]} />
                    <meshStandardMaterial color="#00bcd4" roughness={0.1} metalness={0.1} />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[-5, 8, 4]} castShadow>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#ffeb3b" roughness={0.1} />
                </mesh>
            </Float>
            <Float speed={5} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[7, 3, 2]} castShadow>
                    <dodecahedronGeometry args={[0.7]} />
                    <meshStandardMaterial color="#7c4dff" roughness={0.2} />
                </mesh>
            </Float>

            <Cloud opacity={0.6} speed={0.4} width={20} depth={1.5} segments={20} position={[0, 10, -10]} />
            <Cloud opacity={0.6} speed={0.4} width={15} depth={1.5} segments={20} position={[10, 8, -5]} />

            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#81c784" roughness={0.8} />
            </mesh>

            <ContactShadows position={[0, 0.01, 0]} opacity={0.4} scale={40} blur={2.5} far={4} />

            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 3}
                autoRotate
                autoRotateSpeed={0.5}
            />
        </Canvas>
    );
};

export default Scene;
