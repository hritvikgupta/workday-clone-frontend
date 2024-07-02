import React from 'react';

const styles = {
    Card: {
        margin: '0 auto',
        marginTop: '100px',
        width: '400px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        border: '1px solid #7c9d86',
        boxSizing: 'border-box',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
}

const Card = (props) => {
    return (
        <div style={styles.Card}>
            {props.children}
        </div>
    )
}

export default Card;

