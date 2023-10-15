# marvel_assemble-React-TS

## 🌟 소개

이 저장소는 `React`와 `TypeScript` 학습을 깊이 있고, 세세하게 진행하기 위한 개인 프로젝트입니다.  
프로젝트의 규모는 비록 작지만, 그 목적은 큽니다.

[🔗 배포 링크](https://sarangdaddy.github.io/marvel_assemble-react-ts/)

## 🚀 목적

주요 목표는 외부 라이브러리에 의존하지 않고 `useFetch`, `Error Boundary`, 그리고 `Data Caching` 같은 기본 기능들을 직접 구현하는 것입니다.  
또한, React의 신기술인 `Suspense`를 학습하고 활용해 봅니다.

## 기술 스택

- React
- TypeScript
- styled-components

## 구현 내용

- [🔄 커스텀 useFetch 훅](<(https://github.com/sarangdaddy/marvel_assemble-React-TS/wiki/useFetch)>)

  - 중복 API 호출 로직을 재사용하여 유지보수성을 향상시켰습니다.
  - 데이터 패치 로직을 외부로 분리하여 UI 로직에만 집중하는 선언적인 컴포넌트를 구현하였습니다.

- [🛑 직접 구현한 Error Boundary](<(https://github.com/sarangdaddy/marvel_assemble-React-TS/wiki/Error-Boundary)>)

  - 컴포넌트 트리 내에서 에러를 캡쳐하고 에러 페이지를 표시하여 사용자에게 안정적인 UI를 제공합니다.
  - 부분적인 UI 에러로 전체 애플리케이션이 충돌하지 않도록 방지하여 사용자 경험을 개선합니다.

- [🗂️ 직접 구현한 Data Caching 로직](<(https://github.com/sarangdaddy/marvel_assemble-React-TS/wiki/Data-Caching)>)

  - 이미 한 번 로드한 데이터를 재사용하여 네트워크 비용을 절감합니다.
  - UI 변화가 Data Caching 적용 전보다 약 44% (1.8초) 빨라지게 개선되어 사용자 경험을 향상시켰습니다.

- [🔄 React Suspense를 활용한 비동기 로딩 관리](<(https://github.com/sarangdaddy/marvel_assemble-React-TS/wiki/Suspense-&-Lazy)>)
  - 각 컴포넌트에서 관리되는 로딩 상태 로직을 일괄적으로 관리하여 코드의 복잡성을 줄이고 유지보수성을 향상시켰습니다.
  - React.lazy()와 함께 사용하여 컴포넌트 레벨의 코드 스플리팅을 구현하였습니다.
