import React from 'react'
import { raceMap } from '../../../util/raceMap'
import styles from './game.module.scss'
import { PlayerName } from './PlayerName'
import classNames from 'classnames'

interface Props {
  matchMeta: MatchMeta
}

export const SingleGameHeaderSection = (props: Props) => {
  const { matchMeta } = props
  const { players, racesShort } = matchMeta

  const classesP1 = classNames(
    styles.p1,
    matchMeta.results[0] === 'Win' ? styles.winner : styles.loser
  )

  const classesP2 = classNames(
    styles.p2,
    matchMeta.results[1] === 'Win' ? styles.winner : styles.loser
  )

  const classesVs = classNames(
    styles.vs,
    matchMeta.results[0] === 'Win' ? styles.vsWinLose : styles.vsLoseWin
  )

  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={classesP1}>
          <div>
            <PlayerName>{players[0]}</PlayerName>
          </div>
          <div className={styles.race}>
            {raceMap[racesShort[0]]}
          </div>
        </div>
        <div className={classesVs}>vs</div>
        <div className={classesP2}>
          <div>
            <PlayerName>{players[1]}</PlayerName>
          </div>
          <div className={styles.race}>
            {raceMap[racesShort[1]]}
          </div>
        </div>
      </div>

    </>
  )
}