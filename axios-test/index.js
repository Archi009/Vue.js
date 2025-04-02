// index.js
const axios = require('axios')
// let's try the axios



// fetch
// 다양한 컨텐트 타입에 사용하기 좋다
fetch('http://localhost:3000/customers')
.then(res=>res.json())                       // fetch이 후 then 2번, 데이터를 자동으로 파싱해주지 않기 때문에 then을 한 번 더 거치면서 데이터를 파싱해준다
.then(result =>{
  console.log('fetch, GET');
  console.log(`\t `,result);
})
.catch(err => console.log(err))



// axios
axios('http://localhost:3000/customers')
.then(result =>{                             // axios는 json 타입에 특화 돼있다. 보낼때 JSON.stringify, 받을때 .json()으로 자동 파싱 한다.
  console.log('axios, GET');
  console.log(`\t` , result.data);
})
.catch(err => console.log(err))


// 단건 조회
axios.get('http://localhost:3000/customers/1')
.then(result =>{                             
  console.log('axios, 단건조회');
  console.log(`\t` , result.data);
})
.catch(err => console.log(err))

// 등록
insertInfo={
  name: '인간',
  email : 'huuuuman@naver.com'
  ,phone : '010-1111-2111'
  ,address : '구미시 로로로'
}
axios.post('http://localhost:3000/customers',insertInfo)
.then(result =>{                             
  console.log('axios, 등록');
  console.log(`\t` , result.data);
})
.catch(err => console.log(err))
// fetch('http://localhost:3000/customers',{
//   method: 'POST',
//   headers : {
//     "Content-Type" : "application/json" 
//   },
//   body : JSON.stringify(insertInfo)
// }
// )
// .then(res=>res.json())                       
// .then(result =>{
//   console.log('fetch, POST');
//   console.log(`\t `,result);
// })
// .catch(err => console.log(err))

//수정


// 삭제