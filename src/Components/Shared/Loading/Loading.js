import React from 'react';

const Loading = () => {
    const loading = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'dodgerblue',
        width:'100%',
        height:'100vh'
    }
    return (
        <div style={loading}>
            <h3>Please wait ... ... ...</h3>
        </div>
    );
};

export default Loading;