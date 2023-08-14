type Letters =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'

export interface SVGProps {
  xmlns: string
  width: string
  height: string
  fill: string
  viewBox: string
  strokeWidth: string
  strokeLinecap: 'round'
  strokeLinejoin: 'round'
  stroke: string
}

export function getDiscHex(discType: string | undefined) {
  switch (discType) {
    case 'white':
      return '#fff'
    case 'black':
      return '#000'
    case 'grey':
      return '#bbbbbb'
    case 'midnight':
      return '#01293d'
    case 'empty':
      return '#2ca7e4'
    case 'light-blue':
      return '#a2e2fc'
    case 'blue':
      return '#2ca7e4'
    case 'D':
      return '#db3c48'
    case 'Di':
      return '#e5561f'
    case 'DI':
      return '#f48119'
    case 'Id':
      return '#ffb727'
    case 'I':
      return '#f7cf0d'
    case 'Is':
      return '#d3e000'
    case 'IS':
      return '#afd80a'
    case 'Si':
      return '#88c100'
    case 'S':
      return '#11b21b'
    case 'Sc':
      return '#51b48e'
    case 'SC':
      return '#00b6bc'
    case 'Cs':
      return '#007fb6'
    case 'C':
      return '#2f5fa5'
    case 'Cd':
      return '#6756b2'
    case 'CD':
      return '#93359b'
    case 'Dc':
      return '#c62e85'
    case 'enneagram-':
      return '#2ca7e4'
    case 'enneagram-1':
      return '#db3c48'
    case 'enneagram-2':
      return '#f48119'
    case 'enneagram-3':
      return '#f7cf0d'
    case 'enneagram-4':
      return '#afd80a'
    case 'enneagram-5':
      return '#11b21b'
    case 'enneagram-6':
      return '#00b6bc'
    case 'enneagram-7':
      return '#2f5fa5'
    case 'enneagram-8':
      return '#93359b'
    case 'enneagram-9':
      return '#c62e85'
    default:
      return '#000'
  }
}

export function getSVGClass(text: string, discType?: string) {
  const discHex = getDiscHex(discType).replace('#', '')

  return `${text}-${discHex}`
}

export function getSVGClasses(
  text: string,
  discType: string | undefined,
): Record<Letters, string> {
  const list = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
  ].slice(0)
  const object: Record<string, string> = {}

  list.forEach(l => {
    object[l] = getSVGClass(`${l}-${text}`, discType)
  })

  return object as Record<Letters, string>
}

export function getBasicClasses(
  viewBox: string,
  discType: string | undefined,
): SVGProps {
  type capTypes = 'round' | 'inherit' | 'butt' | 'undefined'

  const strokeLinecap: capTypes = 'round'
  const strokeLinejoin: capTypes = 'round'

  return {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '100%',
    height: '100%',
    fill: 'none',
    viewBox: viewBox ? viewBox : '0 0 24 24',
    strokeWidth: '2',
    strokeLinecap,
    strokeLinejoin,
    stroke: getDiscHex(discType),
  }
}
