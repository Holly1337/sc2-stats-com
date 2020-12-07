const eternalEmpire = '/assets/images/maps/Eternal_Empire.jpg'
const simulacrum = '/assets/images/maps/Simulacrum.jpg'
const nightshade = '/assets/images/maps/Nightshade_SC2.jpg'
const everDream = '/assets/images/maps/Ever_Dream.jpg'
const goldenWall = '/assets/images/maps/Golden_Wall.jpg'
const zen = '/assets/images/maps/Zen.jpg'
const purityAndIndustry = '/assets/images/maps/Purity_and_Industry.jpg'
const deathaura = '/assets/images/maps/DeathAura.jpg'
const iceAndChrome = '/assets/images/maps/IceAndChrome.jpg'
const pillarsOfGold = '/assets/images/maps/PillarsOfGold.jpg'
const submarine = '/assets/images/maps/Submarine.jpg'

export const mapImagePaths: { [id: string]: string } = {
  eternalEmpire,
  simulacrum,
  nightshade,
  everDream,
  goldenWall,
  zen,
  purityAndIndustry,
  deathaura,
  iceAndChrome,
  pillarsOfGold,
  submarine,
  'Eternal Empire LE': eternalEmpire,
  'Simulacrum LE': simulacrum,
  'Night Shade LE': nightshade,
  'Ever Dream LE': everDream,
  'Golden Wall LE': goldenWall,
  'Zen LE': zen,
  'Purity and Industry LE': purityAndIndustry,
  'Deathaura LE': deathaura,
  'Ice and Chrome LE': iceAndChrome,
  'Pillars of Gold LE': pillarsOfGold,
  'Submarine LE': submarine
}

const fallbackImage = '/assets/images/100x100.png'
export const getMapImageByName = (mapName: string) => {
  let path = mapImagePaths[mapName]
  if (typeof path === 'string') {
    return path
  }
  // try to find map name with LE
  let mapNameLE = `${mapName} LE`
  path = mapImagePaths[mapNameLE]
  if (typeof path === 'string') {
    return path
  }
  // try to remove spaces and turn first latter lowercase
  let mapNameFallback = mapName.replace(' ', '')
  mapNameFallback = mapName.charAt(0).toLocaleLowerCase() + mapName.slice(1)
  path = mapImagePaths[mapNameFallback]
  if (typeof path === 'string') {
    return path
  }
  return fallbackImage
}