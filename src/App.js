// import React, { useState } from 'react';
// import ImageUpload from './components/ImageUpload';
// import ImageDisplay from './components/ImageDisplay';
// import AnalysisResult from './components/AnalysisResult';
// import './styles/App.css';

// function App() {
//   const [image, setImage] = useState(null);
//   const [analysis, setAnalysis] = useState([]);

//   const handleImageUpload = async (uploadedImage) => {
//     setImage(uploadedImage);

//     try {
//       const response = await fetch('/analyze', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ image: uploadedImage }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setAnalysis(data);
//     } catch (error) {
//       console.error('Error:', error);
//       setAnalysis([]);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="title-container">
//         <h1>방사선 GO</h1>
//       </div>
//       <ImageUpload onImageUpload={handleImageUpload} />
//       <ImageDisplay image={image} />
//       <AnalysisResult analysis={analysis} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageDisplay from './components/ImageDisplay';
import AnalysisResult from './components/AnalysisResult';
import './styles/App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState([]);

  // 임시 데이터 설정
  const tempAnalysisData = [
    { name: 'Category 1', percentage: '85' },
    { name: 'Category 2', percentage: '15' }
  ];

  const handleImageUpload = async (uploadedImage) => {
    setImage(uploadedImage);

    // 임시 데이터로 상태 업데이트 (실제 백엔드 연결 전 테스트 용)
    setAnalysis(tempAnalysisData);
  };

  return (
    <div className="App">
      <div className="left-container">
        <h1>방사선 GO</h1>
        <ImageUpload onImageUpload={handleImageUpload} />
        <ImageDisplay image={image} />
        
      </div>
      <div className="right-container">
      <AnalysisResult analysis={analysis} />
      </div>
    </div>
  );
}

export default App;
