import styles from './taskList.module.scss'

export default function TaskList() {
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>Completed Incompleted</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Value</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖊️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}
