
interface TimelineData {
  id: string
  start: number
  image: string
  amount: number
}

export const  createTimelineItem = ({ id, start, image, amount }: TimelineData): object => {
  // @ts-ignore
  start = start * 60
  const secondsSum: number = Math.round(start / 1000)
  const seconds: number = secondsSum % 60
  const minutes: number = Math.floor(secondsSum / 60)
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const timeText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

  const content = `
  <span style='position: relative'>
    <img src="${image}" style="width: 48px; height: 48px;" />
    <div>${timeText}</div>
  </span>
  `

  return {
    id,
    start: start,
    content: content,
    title: id
  }
}
