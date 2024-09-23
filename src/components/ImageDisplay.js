import React from 'react';

function ImageDisplay({ image }) {
  return (
    <div>
      {image ? (
        <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
      ) : (
        <p>아직 이미지가 업로드 되지 않았습니다.</p>
      )}
    </div>
  );
}

export default ImageDisplay;
