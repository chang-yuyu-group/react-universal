import React from 'react'
import classnames from 'classnames'
import styles from './style'

console.log(styles)

// other falsy values are just ignored
const classes = classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
console.log(classes)   // undefined is ignored

class Button extends React.Component {
    render() {
        return (
            <div className={styles.button}>这是一个按钮</div>
        )
    }
}

export default Button