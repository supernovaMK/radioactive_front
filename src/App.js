

import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageDisplay from './components/ImageDisplay';
import AnalysisResult from './components/AnalysisResult';
import './styles/App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState([]);

  const tempAnalysisData = [
    { name: 'Category 1', percentage: '85' },
    { name: 'Category 2', percentage: '15' }
  ];

  const handleImageUpload = async (uploadedImage) => {
    setImage(uploadedImage);
    setAnalysis(tempAnalysisData);
    scrollToDownContainer();
  };

  const scrollToDownContainer = () => {
    const downContainer = document.getElementById('down-container');
    if (downContainer) {
      const targetPosition = downContainer.getBoundingClientRect().top + window.pageYOffset;
      smoothScrollTo(targetPosition, 6000); // 1000ms 동안 스크롤
    }
  };

  const smoothScrollTo = (target, duration) => {
    const start = window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();

    const animation = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0에서 1로 진행 상황을 제한
      const easing = easeInOutQuad(progress); // easing 함수 적용
      window.scrollTo(0, start + distance * easing); // 스크롤 위치 업데이트

      if (progress < 1) {
        requestAnimationFrame(animation); // 애니메이션 프레임 요청
      }
    };

    requestAnimationFrame(animation); // 애니메이션 시작
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 * t) - (2 * t * t); // easing 함수
  };

  return (
    <div className="App">
      <div className="top-container" style={{ height: '100vh' }}>
        <h1>방사선</h1>
        <ImageUpload onImageUpload={handleImageUpload} />
        <ImageDisplay image={image} />
        <h1 className="left-aligned">우리는 사진에 관한 객체들의 방사선에 대한 정보와</h1>
        <h1 className="left-aligned">관련된 추가적인 뉴스들을 알려드립니다.</h1>
      </div>
      <div id="down-container" className="down-container" style={{ height: '100vh', background: '#f0f0f0' }}>
        <ImageDisplay image={image} />
        <AnalysisResult analysis={analysis} />
      </div>
    </div>
  );
}

export default App;
