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
const jagannatha = '/assets/images/maps/Jagannatha.jpg'
const lightshade = '/assets/images/maps/Lightshade.jpg'
const oxide = '/assets/images/maps/Oxide.jpg'
const romanticide = '/assets/images/maps/Romanticide.jpg'
const triton = '/assets/images/maps/Triton.jpg'
const ephemeron = '/assets/images/maps/Ephemeron.jpg'
const worldOfSleepers = '/assets/images/maps/World_of_Sleepers.jpg'
const twoKAtmospheres = '/assets/images/maps/2000Atmospheres.jpg'
const berlingrad = '/assets/images/maps/Berlingrad.jpg'
const blackburn = '/assets/images/maps/Blackburn.jpg'
const curiousMinds = '/assets/images/maps/CuriousMinds.jpg'
const glitteringAshes = '/assets/images/maps/GlitteringAshes.jpg'
const hardwire = '/assets/images/maps/Hardwire.jpg'
const prideOfAltaris = '/assets/images/maps/prideOfAltaris.jpg'
const beckettIndustries = '/assets/images/maps/BeckettIndustries.jpg'

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
  jagannatha,
  lightshade,
  oxide,
  romanticide,
  triton,
  worldOfSleepers,
  ephemeron,
  glitteringAshes,
  hardwire,
  berlingrad,
  curiousMinds,
  blackburn,
  prideOfAltaris,
  beckettIndustries,
  '2000Atmospheres': twoKAtmospheres,
  'Eternal Empire LE': eternalEmpire,
  'Simulacrum LE': simulacrum,
  'Nightshade LE': nightshade,
  'Ever Dream LE': everDream,
  'Golden Wall LE': goldenWall,
  'Zen LE': zen,
  'Purity and Industry LE': purityAndIndustry,
  'Deathaura LE': deathaura,
  'Ice and Chrome LE': iceAndChrome,
  'Pillars of Gold LE': pillarsOfGold,
  'Submarine LE': submarine,
  'Jagannatha LE': jagannatha,
  'Lightshade LE': lightshade,
  'Oxide LE': oxide,
  'Romanticide LE': romanticide,
  'Triton LE': triton,
  'Ephemeron LE': ephemeron,
  'World of Sleepers LE': worldOfSleepers,
  '2000 Atmospheres LE': twoKAtmospheres,
  'Berlingrad LE': berlingrad,
  'Blackburn LE': blackburn,
  'Curious Minds LE': curiousMinds,
  'Glittering Ashes LE': glitteringAshes,
  'Hardwire LE': hardwire,
  'Pride of Altaris LE': prideOfAltaris,
  'Beckett Industries LE': beckettIndustries,
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