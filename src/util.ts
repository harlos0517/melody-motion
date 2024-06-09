export const toCamel = (str: string) => str.replace(/[-_:]([a-z])/g, g => g[1].toUpperCase())

export const wrapSentence = (str = '', len = 80) =>
  str.replace(new RegExp(`(.{1,${len}})(\\s|$)`, 'g'), '$1\n').slice(0, -1)


export const lastIn = <T>(arr: T[]) => arr[arr.length - 1] || null

export const isEmpty = <T>(arr: T[]) => arr.length === 0

export const num = (str: string | number | undefined) => Number(str || 0) || 0
