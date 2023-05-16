import React from 'react';

export default function Embed({ src, title }) {
  return (
    <div
      style={{
        position: 'relative',
        height: '540px',
      }}
    >
      <iframe
        src={src}
        frameborder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen="true"
        allow="autoplay; fullscreen"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          colorScheme: 'light',
          overflow: 'hidden',
          padding: '16px 0px',
        }}
        title={title ? title : ''}
      ></iframe>
    </div>
  );
}
