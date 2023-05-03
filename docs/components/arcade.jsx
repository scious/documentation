import React from 'react';

export default function Arcade({ src, title }) {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: 'calc(67.14527027027027% + 60px)',
        height: 0,
      }}
    >
      <iframe
        src={src}
        frameborder="0"
        loading="lazy"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          colorScheme: 'light',
        }}
        title={title ? title : ''}
      ></iframe>
    </div>
  );
}
