import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './style'

console.log(styles)

// other falsy values are just ignored
const classes = classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
console.log(classes)   // undefined is ignored

class Button extends Component {
    render() {
        return (
            <div className={styles.button}>
                Primary
            </div>
        )
    }
}

export default Button