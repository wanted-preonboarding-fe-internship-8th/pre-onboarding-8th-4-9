# Notice Board with React-Redux

## 개발 과정 및 Best Practice

1. [댓글 CRUD](https://github.com/wanted-preonboarding-fe-internship-8th/pre-onboarding-8th-4-9/wiki/1.-%EB%8C%93%EA%B8%80-CRUD)
2. [페이지네이션](https://github.com/wanted-preonboarding-fe-internship-8th/pre-onboarding-8th-4-9/wiki/2.-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98)
3. [댓글 작성, 수정, 삭제 후 동작](https://github.com/wanted-preonboarding-fe-internship-8th/pre-onboarding-8th-4-9/wiki/3.-%EB%8C%93%EA%B8%80-%EC%9E%91%EC%84%B1,-%EC%88%98%EC%A0%95,-%EC%82%AD%EC%A0%9C-%ED%9B%84-%EB%8F%99%EC%9E%91)
4. [RTK 채택 및 관심사의 분리](https://github.com/wanted-preonboarding-fe-internship-8th/pre-onboarding-8th-4-9/wiki/4.-RTK-%EC%B1%84%ED%83%9D-%EB%B0%8F-%EA%B4%80%EC%8B%AC%EC%82%AC%EC%9D%98-%EB%B6%84%EB%A6%AC)
## 실행 방법

```bash
$ npm install
```

**서버**

```bash
$ npm run api
```

**클라이언트**

```bash
$ npm run start
```

## 커밋 규칙

개발하시기 전에

```bash
$ npm run prepare
```

를 통해 `husky` 설치해주세요!

기본적인 커밋 규칙은 다음 가이드를 따릅니다. [Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

## 브랜치 전략

- main (배포용 브랜치)
- dev (개발용 브랜치)

각 기능을 개발할 때 `feat/example`과 같이 브랜치를 생성하여 dev 브랜치로 `push`하였습니다. 이후 배포에 적용할 때에 main에 올려 배포하였습니다.

## 협업 방법

<div>
  <img src="https://user-images.githubusercontent.com/62709718/208821813-5f880759-64e4-46d4-8d2f-9721d231f4ae.png" width="200px;" />
</div>

- 디스코드 음성 채널을 통해 회의를 진행하였습니다.
- 디스코드 웹훅을 설정하여 디스코드 채널로 알람을 받았습니다.

## 팀원

<table>
  <tr>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/211858707-046f5b18-b31f-40f1-ae24-6e992612cc5a.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676156-350f5e57-7568-497a-ba32-cf7f849ef688.png" width="100px;" alt=""/>
    </td>  
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676001-b838be17-a6da-4954-8382-7b537a359f2a.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208675953-3dbf10de-ed57-4b9a-9a5a-903dd5b8e708.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208675588-1fc2c6ec-0a10-4496-b7de-39cfbfa5e7ab.png" width="100px;" alt=""/>
    </td>
  </tr>
  <tr>    
    <td align="center">
      <a href="https://github.com/dahui-sharon-kim">
        <div>dahui-sharon-kim</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jong-k">
        <div>jong-k</div>
      </a>
    </td>   
    <td align="center">
      <a href="https://github.com/shinwonse">
        <div>shinwonse (팀장)</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/abcabcp">
        <div>abcabcp</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dong53358">
        <div>dong53358</div>
      </a>
    </td>
  </tr>
</table>
