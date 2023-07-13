import classNames from 'classnames'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { useState } from 'react'

export function CountryFlag({ country }: { country: string }) {
  const [isLoaded, setLoaded] = useState(false)

  const imgClassname = classNames(
    'block object-cover h-full',
    isLoaded ? 'visible' : 'invisible h-0'
  )

  return (
    <>
      <img
        className={imgClassname}
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
        onLoad={() => setLoaded(true)}
        alt='flag'
      />
      {!isLoaded && (
        <div className='h-full flex items-center '>
          {getUnicodeFlagIcon(country)}
        </div>
      )}
    </>
  )
}
