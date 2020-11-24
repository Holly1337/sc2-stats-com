import styles from './topbar.module.scss'
import Link from 'next/link'

export const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <Link href={'/'}>
              <a>
                <span style={{fontSize: 18}}>Home</span>
              </a>
            </Link>
        </div>
    )
}