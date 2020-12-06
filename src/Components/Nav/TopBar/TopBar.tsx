import styles from '../topbar.module.scss'
import Link from 'next/link'
import { SearchBar } from './SearchBar'
import { Header, Icon } from 'semantic-ui-react'

export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div>
        <Link href={'/'}>
          <a>
            <Icon name={'line graph'} size={'large'} className={'mr-4'} />
            <Header size={'small'} style={{ display: 'inline-block', marginTop: 1 }}>SC2 Stats</Header>
          </a>
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <a href="https://twitter.com/HollySC2">
          <Icon name={'twitter'} circular size={'large'} />
        </a>
      </div>
    </div>
  )
}
