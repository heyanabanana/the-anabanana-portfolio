const getHashOfString = (str: any) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    // tslint:disable-next-line: no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  hash = Math.abs(hash)
  return hash
}

const normalizeHash = (hash: any, min = 10, max = 20) => {
  return Math.floor((hash % (max - min)) + min)
}

const generateHSL = (name: any, saturationRange = [10, 30], lightnessRange = [30, 70]) => {
  const hash = getHashOfString(name)
  let h = normalizeHash(hash, 0, 360)
  let s = normalizeHash(hash, saturationRange[0], saturationRange[1])
  let l = normalizeHash(hash, lightnessRange[0], lightnessRange[1])
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0') // convert to Hex and prefix "0" if needed
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export { generateHSL }
