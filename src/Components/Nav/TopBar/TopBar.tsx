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
        <a href="https://twitter.com/HollySC2" target={'_blank'} rel={'noopener noreferrer'}>
          <Icon name={'twitter'} size={'large'} color={'black'} />
        </a>
        <a href="https://github.com/Holly1337/sc2-stats-com" target={'_blank'} rel={'noopener noreferrer'}>
          <Icon name={'github'} size={'large'} color={'black'} />
        </a>
      </div>
    </div>
  )
}
