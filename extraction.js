import {createWorker} from 'tesseract.js';


const worker = await createWorker();
const rectangles = [
    
        // First row
        { left: 0, top: 0, width: 500, height: 250 },
        { left: 500, top: 0, width: 500, height: 250 },
        { left: 1000, top: 0, width: 500, height: 250 },
        
        // Second row
        { left: 0, top: 250, width: 500, height: 250 },
        { left: 500, top: 250, width: 500, height: 250 },
        { left: 1000, top: 250, width: 500, height: 250 },
        
        // Third row
       
    
      
];

(async () => {
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const values = [];
  for (let i = 0; i < rectangles.length; i++) {
    const { data: { text } } = await worker.recognize('text.png', { rectangle: rectangles[i] });
    values.push(text);
  }
  console.log(values);
  await worker.terminate();
})();