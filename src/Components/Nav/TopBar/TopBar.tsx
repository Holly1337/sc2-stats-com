import styles from '../topbar.module.scss'
import Link from 'next/link'
import { SearchBar } from './SearchBar'
import { Icon } from 'semantic-ui-react'
import Image from 'next/image'
import classNames from 'classnames'
import { Dispatch, SetStateAction, useContext } from 'react'
import { SidebarContext } from '../../../../pages/_app'
import { useRouter } from 'next/router'

export const TopBar = () => {
  // @ts-ignore
  const [isOpen, setIsOpen] = useContext<[boolean, Dispatch<SetStateAction<boolean>>]>(SidebarContext)
  const router = useRouter()
  // Icon font is District on Photopea
  const socialClassName = classNames(styles.social, 'mobile hidden')
  const searchBarClassName = classNames(styles.searchBar, 'mobile hidden')

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
      <div className={searchBarClassName}>
        <SearchBar />
      </div>
      {
        router.pathname !== '/' && (
          <div className={'mobile only'}>
            <Icon
              name={isOpen ? 'close' : 'bars'}
              size={'big'}
              className={styles.menuIcon}
              onClick={() => { setIsOpen(isOpen => !isOpen) }}
            />
          </div>
        )
      }
      <div className={socialClassName}>
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
