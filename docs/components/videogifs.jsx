import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function VideoGIF({ src, caption }) {
  return (
    <figure
      style={{
        textAlign: 'center',
        padding: 16,
        boxShadow: '2px 3px 6px #eaeaea',
      }}
    >
      <video width="100%" autoPlay loop muted playsInline>
        <source src={useBaseUrl(src)} type="video/mp4" />
      </video>
      {caption ? <figcaption>{caption}</figcaption> : ''}
    </figure>
  );
}
