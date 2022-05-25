import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ModelViewer from '../components/ModelViewer'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'
import { fileUploadConfig } from '../lib/clients';
import axios from 'axios'
import FileUploadButton from '../components/FileUploadButton'
import ColorInput from '../components/ColorInput'
import ColorChooser from '../components/ColorChooser'
import Controller from '../components/Controller'

const Home: NextPage = () => {
  const [materialPath, setMaterialPath] = useState<string | undefined>(undefined);
  const [materialColor, setMaterialColor] = useState<string | undefined>(undefined);
  const handleSetNewMaterial = async (formData: any) => {
    const response = await axios.post('/api/upload', formData, fileUploadConfig);
    setMaterialPath(response.data.file.path)
  }

  const handleSetMugColor = (color: string) => {
    const newColor = color.replace('#', '0x');
    setMaterialColor(newColor);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Assmeble Mugs</title>
        <meta name="description" content="Assemble makes coffee mugs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <Navigation /> */}
      <main className={styles.main}>
        <div className={`${styles.border} ${styles['w-100']}}`}>
          <h1 className={styles.title}>
            Assemble Inc.
          </h1>
          <p className={styles.description}>
            We make <s>web apps</s> coffee mugs
          </p>
        </div>
        <div className={`${styles.border} ${styles['inherit-height']}`}>
          <ModelViewer
            scale={40}
            modelPath="/assets/coffee-mug.gltf"
            materialPath={materialPath}
            materialColor={materialColor}
          />
        </div>
        <Controller>
          <div className={styles.flex}>
            <div className={styles.column}>
              <span>Image</span>
            </div>
            <div className={styles.column}>
              <FileUploadButton
                uploadFileName="file"
                onChange={handleSetNewMaterial}
              >
                Customize
              </FileUploadButton>
            </div>
          </div>
          <ColorChooser colors={['#ffffff', '#ff0000', '#ffff00', '#00ff00', '#0000ff', '#000000', 'custom']} onChange={handleSetMugColor} />
          {/* <ColorInput onChange={handleSetMugColor}  /> */}
        </Controller>
      </main>
    </div>
  )
}

export default Home
