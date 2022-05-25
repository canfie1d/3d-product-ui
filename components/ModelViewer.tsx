import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ materialColor, modelPath, scale = 40, position = [0, 0, 0], materialPath }: {materialColor?: string, modelPath: string, scale?: number, position?: number[], materialPath?: string}) => {
  return (
    <div style={{ width: '100vh', height: '100%'}}>
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel materialColor={materialColor} modelPath={modelPath} scale={scale} position={position} materialPath={materialPath} />
        <OrbitControls />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default ModelViewer;
