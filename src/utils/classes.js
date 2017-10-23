import classNames from 'classnames'

export function genClasses(classes) {
  let ret = ''
  classes.forEach(e => {
      ret = ret + ` ${e}`
  })
  return ret
}