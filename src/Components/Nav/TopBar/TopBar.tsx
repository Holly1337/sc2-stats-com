import styles from '../topbar.module.scss'
import Link from 'next/link'
import { SearchBar } from './SearchBar'

export const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <Link href={'/'}>
              <a>
                <span style={{fontSize: 18}}>Home</span>
              </a>
            </Link>
          <div>
            <SearchBar />
          </div>
          <div>Twitter here</div>
        </div>
    )
}
