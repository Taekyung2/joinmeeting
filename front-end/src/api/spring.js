export default {
  URL: 'http://localhost:8080/videoconference/api',
  ROUTES: {
    
    getProfile: '/account/', // 뒤에 사용자 ID, // 결과값은 ID, 프로필사진, 이름
    
    getGroupInfo: '/group/', // 뒤에 그룹 ID번호 붙이기  ==> 결과 값은 해당 그룹의 정보들(그룹이름, 호스트, 소속인원, 그룹소개)
    
    joinConference: '/conference/', // 뒤에 방번호(그룹번호 ID) 붙이기
    getConferenceList: '/conference/conferences',  // 결과값은 현재 내가 속한 그룹들 중 회의중인 그룹들의 그룹 이름과 호스트?
    
    getNoteList: '/note/notes/',  // 결과 값은 내가 만든(저장한) 노트들의 목록(이름 + 생성날짜?)
    getNoteInfo: '/note/', // 뒤에 노트ID, 결과 값은 해당 노트의 내용(마크다운형식?)
    
    // 이 아래로는 진짜로 만든거
    
    getGroupList: '/group/get/me/', // 리턴 값은 내가 속한 그룹들의 정보
    createGroup: '/group/add/',  // 그룹 만들기 ==> 사람들 정보가 나와야 한다.
    
    signup: '/register',
    checkEmail: '/register/duplicateId',
    login: '/login',
    logout: '/logout',


  }
};