import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ materialColor, modelPath, scale = 40, position = [0, 0, 0], materialPath }: {materialColor?: string, modelPath: string, scale?: number, position?: number[], materialPath?: string}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <PresentationControls
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={2} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 30, friction: 16 }} // Spring config
        >
          <GltfModel materialColor={materialColor} modelPath={modelPath} scale={scale} position={position} materialPath={materialPath} />
          {/* <OrbitControls minDistance={.3} maxZoom={1} /> */}
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
