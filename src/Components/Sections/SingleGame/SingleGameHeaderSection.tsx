import React from 'react'
import { raceMap } from '../../../util/raceMap'
import styles from './game.module.scss'
import { PlayerName } from './PlayerName'
import { Icon } from 'semantic-ui-react'
import { mrgbaToRgbaString } from '../../../util/colors'

interface Props {
  matchMeta: MatchMeta
}

const WinnerIcon = () => <Icon name={'angle double up'} color={'green'} size={'large'} className={styles.resultIcon} />
const LoserIcon = () => <Icon name={'angle double down'} color={'red'} size={'large'} className={styles.resultIcon} />

export const SingleGameHeaderSection = (props: Props) => {
  const { matchMeta } = props
  const { players, racesShort, colors } = matchMeta

  return (
    <>
      <div className={styles.headerWrapper}>
        <div
          className={styles.p1}
          style={{
          borderColor: mrgbaToRgbaString(colors[0])
          }}
        >
          <div>
            {matchMeta.results[0] === 'Win' ? <WinnerIcon /> : <LoserIcon />}
          </div>
          <div>
            <div>
              <PlayerName>{players[0]}</PlayerName>
            </div>
            <div className={styles.race}>
              {raceMap[racesShort[0]]}
            </div>
          </div>
        </div>
        <div
          className={styles.vs}
          style={{
            borderImageSource: `linear-gradient(to right, ${mrgbaToRgbaString(colors[0])}, ${mrgbaToRgbaString(colors[1])})`
          }}
        >vs</div>
        <div
          className={styles.p2}
          style={{
            borderColor: mrgbaToRgbaString(colors[1])
          }}
        >
          <div>
            <div>
              <PlayerName>{players[1]}</PlayerName>
            </div>
            <div className={styles.race}>
              {raceMap[racesShort[1]]}
            </div>
          </div>
          <div>
            {matchMeta.results[1] === 'Win' ? <WinnerIcon /> : <LoserIcon />}
          </div>
        </div>
      </div>

    </>
  )
}