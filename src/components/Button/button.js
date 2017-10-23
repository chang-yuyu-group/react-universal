import React, { Component } from 'react'
// import classnames from 'classnames'
import { genClasses } from '../../utils/classes'
import styles from './style'

// console.log(styles)

// other falsy values are just ignored
// const classes = classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')
// console.log(classes)   // undefined is ignored

// 当前方案是拼接字符串
const PRIMARY = styles.primary
const BUTTON = styles.button

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