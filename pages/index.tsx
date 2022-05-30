import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ModelViewer from '../components/ModelViewer';
import styles from '../styles/Home.module.css';
import { fileUploadConfig } from '../lib/clients';
import axios from 'axios';
import FileUploadButton from '../components/FileUploadButton';
import ColorChooser from '../components/ColorChooser';
import Controller from '../components/Controller';
import ModelSelector from '../components/ModelSelector';

const Home: NextPage = () => {
  const [model, setModel] = useState({name: 'Mug', path: "/assets/coffee-mug.gltf"});
  const [materialPath, setMaterialPath] = useState<string | undefined>(undefined);
  const [materialColor, setMaterialColor] = useState<string | undefined>(undefined);
  const handleSetNewMaterial = async (formData: any) => {
    const response = await axios.post('/api/upload', formData, fileUploadConfig);
    setMaterialPath(response.data.file.path);
  }

  const handleSetMugColor = (color: string) => {
    const newColor = color.replace('#', '0x');
    setMaterialColor(newColor);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Assemble Mugs</title>
        <meta name="description" content="Assemble makes coffee mugs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={`${styles.border} ${styles['w-100']}}`}>
          <h1 className={styles.title}>
            Assemble Inc.
          </h1>
          <p className={styles.description}>
            We make <s>web apps</s> {`coffee ${model.name.toLowerCase()}s`}
          </p>
        </div>
        <div className={`${styles.border} ${styles['h-100']}`}>
          <div className={`${styles.flex} ${styles['h-100']}`}>
            <ModelSelector
              models={[
                {name: 'Mug', path: "/assets/coffee-mug.gltf"},
                {name: '12oz Tumbler', path: "/assets/12oz-tumbler.gltf"},
                {name: '16oz Tumbler', path: "/assets/16oz-tumbler.gltf"},
                {name: '20oz Bottle', path: "/assets/20oz-bottle.gltf"}
              ]}
              currentModel={model.path}
              onChange={setModel}
            />
            <ModelViewer
              scale={40}
              modelPath={model.path}
              materialPath={materialPath}
              materialColor={materialColor}
              />
            </div>
        </div>
        <Controller>
          <div className={`${styles.flex} ${styles['flex-col']}`}>
            <div className={styles.column}>
              <span>Image</span>
            </div>
            <div className={styles.column}>
              <FileUploadButton
                uploadFileName="file"
                onChange={handleSetNewMaterial}
              >
                Upload
              </FileUploadButton>
            </div>
          </div>
          <ColorChooser colors={['#ffffff','#ece81a', '#c0d4c0', '#006269', '#8e8e8e', '#f0d8cc', '#2e2e2e', 'custom']} onChange={handleSetMugColor} />
        </Controller>
      </main>
    </div>
  );
}

export default Home
