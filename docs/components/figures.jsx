import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Figure({ src, caption }) {
  return (
    <figure style={{ textAlign: 'center', padding: 16 }}>
      <img src={useBaseUrl(src)} alt={caption} />
      {caption ? <figcaption>{caption}</figcaption> : ''}
    </figure>
  );
}
