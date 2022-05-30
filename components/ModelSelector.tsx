import styles from '../styles/components/model-selector.module.css';

const ModelSelector = ({
  models,
  currentModel,
  onChange
}: {
  onChange: (model: {name: string, path: string}) => void,
  models: {name: string, path: string}[],
  currentModel: string
}) => {
    return (
    <div className={styles['container']}>
      <nav>
        <ul>
          {models.map((model: {name: string, path: string}, i: number) => (
            <li key={`model-${i}`}>
              <button className={`${styles['button']} ${currentModel === model.path ? styles['active'] : ''}`} onClick={(_) => onChange(model)}>
                {model.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default ModelSelector;
