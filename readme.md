# 뉴 웨딩의 여신 프로젝트
- 2023.06.29 author wan.b

## 개요

> 현재 new.wedqueen.com에 등록 되어있습니다 (ec2, new-wedqueen-wan)
> 프로젝트 사용 프레임워크 nuxt.js+typescript로 작성하였습니다, 서버운영체제에서 PM2로 프로젝트 서버를 매니징 합니다.
> 작업환경은 npm 버전 6.14.8에서 정상동작 확인했습니다.
> 지금 실서버 www.wedqueen.com에서 JSP에 의존적인 서버를 따로 떼어놓고 관리하기위해 제작 되었으며, REST-API가 정의되는대로 이어 작업을 진행하시면됩니다,


## local 테스트 서버 구동 (nuxt.js test서버)

> nuxt-app디렉토리 안에서 npm i로 라이브러리를 다운로드 이후
> npm run dev로 dev서버를 구동시킵니다, 포트번호는 3000입니다,


## local 빌드 서버 구동 (nuxt.js + Docker)

> Docker 설치, npm i 인스톨, node version 6.14.x 초기세팅 확인
> Docker 빌드 => docker build --tag [이미지 명:버전] // ex) docker build --tag new-wedqueen-site:0.0.1 .
> Docker 이미지 실행 => docker run --name [이미지 명] -d -p 3000:3000 [이미지 명]:0.0.1
> 3000 port에서 실행됩니다, http://localhost:3000

## ec2 서버 구동시 (Docker),

> main branche에 푸쉬하면 자동 빌드시작입니다, (무중단 배포 적용이 안되어 10분간 서버가 내려갈수있습니다)
> 빌드과정은 github 레파짓토리 > actions에서 확인하거나, vscode github actions 확장 프로그램 설치후 연결하시면 볼수있습니다.
