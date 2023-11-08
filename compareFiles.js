const path = require('path');

// 파일이 .txt 파일인지 확인하는 함수
const isTxtFile = (fileName) => {
  // 경로의 확장자 반환
  // todo .extname .to LowerCase 더 알아보기
  let result = path.extname(fileName).toLowerCase() === '.txt';
  return result; // 문자열
};

// 두 .txt 파일의 내용을 비교하는 함수
const compareFiles = (operator, operand) => {
  try { // 예외처리
  // 파일 확장자 검사
  } catch {
    
  }
}