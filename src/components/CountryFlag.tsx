export function CountryFlag({ country }: { country: string }) {
  return (
    <img
      className='block object-cover h-full'
      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
      alt='usa flag'
    />
  )
}
