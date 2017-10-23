import React from 'react'
import styles from './style'

console.log(styles)

class Button extends React.Component {
    render() {
        return (
            <div className={styles.button}>这是一个按钮</div>
        )
    }
}

export default Button