import { getLocaleTime } from '../helpers/timeHelpers'
import { useNow } from '../hooks/useNow'

export function CityTime({ timezone }: { timezone: number }) {
  const getTime = () => getLocaleTime(new Date().getTime(), timezone)
  const time = useNow<string>(getTime(), getTime, 1000)

  return <>{time}</>
}
