import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './style'

console.log(styles)

// other falsy values are just ignored
// const classes = classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')
// console.log(classes)   // undefined is ignored

const PRIMARY = styles.primary
const BUTTON = styles.button

function genClasses(classes) {
    let ret = ''
    classes.forEach((e) => {
        ret = ret + ` ${e}`
    })
    return ret
}

const classes = genClasses([BUTTON, PRIMARY])

class Button extends Component {
    render() {
        return (
            <div className={classes}>
                Primary
            </div>
        )
    }
}

export default Button