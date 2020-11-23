import React from 'react'
import Number from "../../Common/Numbers/Number"
import classnames from 'classnames'
import styles from './matchup.module.scss'

const icons = {
    Prot: <span className={classnames('sc-protoss', styles['sc-protoss'], styles.matchupIcon)} />,
    Terr: <span className={classnames('sc-terran', styles['sc-terran'], styles.matchupIcon)} />,
    Zerg: <span className={classnames('sc-zerg', styles['sc-zerg'], styles.matchupIcon)} />,
    Rand: <span className={classnames('sc-siege-tank', styles['sc-sc-siegetank'], styles.matchupIcon)} />
}

const MatchupItem: React.FC<MatchupStat> = ({ race1, race2, race1Wins, race2Wins }) => {
    const totalGames = race1Wins + race2Wins
    const winrateRace1 = Math.round((race1Wins / totalGames) * 100)
    const winrateRace2 = Math.round((race2Wins / totalGames) * 100)

    return (
        <div className={styles.matchup}>
            <div className={'text-center'}>
                <span><Number value={totalGames}/></span>
                <div className='d-flex flex-column' style={{fontSize: 20, padding: '0 40px'}}>
                    <div className='d-flex align-items-center justify-content-between'>
                        {icons[race1]}
                        <span className={styles.vs}>vs</span>
                        {icons[race2]}
                    </div>
                    {
                        (race1 !== race2) && (
                            <div className='d-flex justify-content-between mt-4'>
                                <span style={{width: 64}}>{winrateRace1}%</span>
                                <span>{race1Wins}:{race2Wins}</span>
                                <span style={{width: 64}}>{winrateRace2}%</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MatchupItem
