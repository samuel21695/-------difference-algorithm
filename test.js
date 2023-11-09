// 필요한 모듈을 가져옵니다.
import fs from 'fs';

// JSON 파일을 읽는 함수
function readJSONFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${filename}: ${err.message}`);
    return null;
  }
}

// 두 JSON 파일을 읽어옵니다.
const fromDBData = readJSONFile('./data/fromDB-data.json');
const differencesData = readJSONFile('./data/differences.json');

// 함수를 만듭니다.
function compareAndStoreWords() {
  if (!fromDBData || !differencesData) {
    console.error('Error: JSON data not loaded.');
    return;
  }

  // "operator"와 "operand" 값을 가져옵니다.
  const operatorWords = fromDBData.operator.split(' ');
  const operandWords = fromDBData.operand.split(' ');

  // 두 배열의 중복과 차이점을 찾습니다.
  const sameWords = operatorWords.filter(word => operandWords.includes(word));
  const differenceWords = operatorWords
    .concat(operandWords)
    .filter(word => !(operatorWords.includes(word) && operandWords.includes(word)));

  // 결과를 differences.json 파일에 저장합니다.
  differencesData.sameWords = sameWords;
  differencesData.differenceWords = differenceWords;

  // differences.json 파일 업데이트
  fs.writeFileSync('./data/differences.json', JSON.stringify(differencesData, null, 2), 'utf8');

  console.log('Comparison completed and results are stored in differences.json.');
}

// 함수를 호출하여 비교 및 저장을 시작합니다.
compareAndStoreWords();