import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";

const GltfModel = ({ materialColor, materialPath, modelPath, scale = 40, position = [0, 0, 0] }: {materialColor?: string, modelPath: string, scale: number, position: number[], materialPath?: string}) => {
  const ref = useRef();
  const { scene } = useLoader(GLTFLoader, modelPath)
  const copiedScene = useMemo(() => scene.clone(), [scene])
  const [hovered, hover] = useState(false);

  useEffect(() => {
    if (materialPath) {
      copiedScene.traverse(child => {
        // @ts-ignore
        if (child.material && child.material.name === 'Logo') {
          const newPath = materialPath.replace('public/', '');
        // @ts-ignore
          child.material.map = new TextureLoader().load(newPath);
          // @ts-ignore
          child.material.map.flipY = false;
        }
      });
    }
  }, [materialPath, copiedScene]);



  useEffect(() => {
    if (materialColor) {
      copiedScene.traverse(child => {
        // @ts-ignore
        if (child.material && child.material.name === 'Mug') {
          // @ts-ignore
          child.material.color.setHex(materialColor);
        }
      })
    }
  }, [materialColor, copiedScene]);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // @ts-ignore
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));

  return (
    <primitive
      ref={ref}
      object={copiedScene}
      position={position}
      scale={hovered ? scale * 1.0 : scale}
      onPointerOver={(_: any) => hover(true)}
      onPointerOut={(_: any) => hover(false)}
    />
  );
};

export default GltfModel;
