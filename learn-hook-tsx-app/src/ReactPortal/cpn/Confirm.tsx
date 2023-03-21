import { createPortal } from 'react-dom'
import styles from './confirm.module.scss'

interface ConfirmProps {
  visible: boolean
  cancel: () => void
  ok: () => void
}

export default function Confirm({ visible, cancel, ok }: ConfirmProps) {
  const handleOk = () => {
    ok()
  }

  const handleCancel = () => {
    cancel()
  }

  return createPortal(
    <div className={styles.modalRoot} style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.confirm}>
          <p className={styles.title}>Are you sure?</p>
          <button onClick={handleOk}>Ok</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('root') as HTMLElement
  )
}
