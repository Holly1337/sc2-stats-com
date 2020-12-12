import styles from '../topbar.module.scss'
import Link from 'next/link'
import { SearchBar } from './SearchBar'
import { Header, Icon } from 'semantic-ui-react'
import Image from 'next/image'

export const TopBar = () => {
  // Icon font is District on Photopea
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <a>
            <div  className={'d-flex align-items-center'}>
              <Image src={'/assets/images/logo_50.png'} width={273} height={50} alt={'sc2-stats icon s2s'} className={'mr-2'} />
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <div className={styles.social}>
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
