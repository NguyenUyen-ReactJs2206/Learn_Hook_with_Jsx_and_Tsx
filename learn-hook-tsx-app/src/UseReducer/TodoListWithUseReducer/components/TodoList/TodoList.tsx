import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import styles from './todoList.module.scss'

export default function TodoList() {
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput />
        <TaskList />
        <TaskList />
      </div>
    </div>
  )
}
