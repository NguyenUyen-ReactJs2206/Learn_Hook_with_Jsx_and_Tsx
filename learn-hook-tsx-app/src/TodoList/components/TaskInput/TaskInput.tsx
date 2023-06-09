import { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'
import { TodoTypes } from '../../proptypes/todo.proptypes'
import connect, { ExtraInfoType } from '../../HOC/connect'
import Title from '../Title/Title'

//Ke thua interface de goi y debug va log
interface TaskInputProps extends ExtraInfoType {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishEditTodo: () => void
}
function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo, debug, log } = props
  const [name, setName] = useState<string>('')
  const address = useMemo(() => {
    return {
      street: '10 Tran Hung Dao'
    }
  }, [])
  const handleClickTitle = useCallback((value: any) => {
    console.log(value)
  }, [])
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      if (name) {
        return setName('')
      }
    } else {
      addTodo(name)
      setName('')
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTodo) {
      editTodo(event.target.value)
    } else {
      setName(event.target.value)
    }
  }
  return (
    <div className='mb-2'>
      <Title address={address} handleClickTitle={handleClickTitle} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}

TaskInput.prototype = {
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  finishEditTodo: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOfType([TodoTypes, PropTypes.oneOf([null])])
}

export default connect<TaskInputProps>(TaskInput)
