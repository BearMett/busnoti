# 버스 도착 알리미

## 매일 버스 도착시간 확인하기 귀찮으니 챗봇이 알려주면됨

1. 버스 도착 시간 확인하기
   입력: 정류장 식별
   예시: 우장초등학교
   하나의 역에 버스 도착 예정 시간을 표시
2. 가장 빠른 버스 알림 명령
   예시: 입력: 정류장 식별, 노선 식별, 도착 알림 시간
   우장초등학교 673 5분
   정류장과 노선번호를 입력하고 도착 알림을 요청하면 그 노선이 도착 예정이 설정한 시간만큼 남았을 때 메시지를 전송
3. 정해진 시간 이후로 오는 N분 이상 남은 버스 도착 알림 설정
   입력: 정류장 식별, 노선 식별, 도착 확인하고싶은 시간, 남은 최소 시간, 도착 알림 시간
   예시: 우장초등학교 673 08:00 3분 5분
   매일 정해진 시간에 남은 최소 시간 이상인 버스가 N분 이하에 도착할 때 메시지를 전송
4. 설정한 정해진 시간 알림 조회
5. 설정한 정해진 시간 알림 삭제