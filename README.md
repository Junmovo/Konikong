# 로스트아크 전적검색 코니콩

- RPG게임 로스트아크 오픈API를 활용하여 캐릭터 정보를 검색할 수 있습니다.

- **`작업 기간 :`** 24.06.04 - 24.06.25 ( 개인프로젝트 )
- **`배포 링크 :`** [로스트아크 전적검색 코니콩](https://junmo-github-io.vercel.app/)
- **`Tech Stacks :`** <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/>

## 목차

- [홈페이지 설명](#홈페이지-설명)
- [작업 내용](#작업내용)
- [트러블 슈팅](#트러블-슈팅)

## 홈페이지 설명

Next.js 14버전을 공부하면서 제작하게 된 첫 프로젝트입니다.  
Next의 폴더구조, 다이나믹 라우팅 및 Typescript를 통한 에러방지
Zustand와 React-Query를 활용한 전역변수 사용법 및 Axios 등 다양한 경험을 하게 되었습니다.

- 검색창에 캐릭터 명을 검색 시 최근검색어로 저장이 됩니다.
- 즐겨찾기를 통하여 빠르게 이동할 수 있습니다.
- 내 캐릭터 공유(URL) 기능을 제공합니다.
- 원하는 공지사항의 카테고리만 볼 수 있는 필터기능을 제공합니다.
- 라이트모드 / 다크모드를 지원합니다.

## 작업내용

- Axios 와 React-Query를 통하여 데이터를 받아왔습니다.
- Zustand와 React-Query를 활용하여 최근검색어 및 즐겨찾기 기능을 전역변수로 작업하였습니다.
  - React-Query의 데이터 캐싱을 통하여 새로고침시 무의미한 데이터 요청을 줄였습니다.
- 이미지 최적화를 위한 Webp 이미지 확장자를 사용하였으며 Next에서 제공해주는 Image 태그를 활용하였습니다.
- 데이터가 존재하지 않을시 빈 화면이 아닌 에러페이지를 제공해줍니다.
- 이미지 로딩시 스켈레톤 UI를 활용하였습니다.

## 트러블슈팅

💥 **문제 발생**  
useEffect()를 활용하여 데이터 요청 시 페이지가 리렌더링 될 때마다 반복적인 데이터 요청이 들어간다는 것을 확인하였습니다. ( 잦은 에러코드 발생 - Rate Limit Exceeded Code 429 )
👏 **해결방법**  
React-Query의 데이터 캐싱을 활용하여 5분마다 한 번 씩 데이터를 업데이트 되게 바꾸었습니다. 컴포넌트의 10줄이상의 코드가 1줄로 변경되어 React-Query의 사용 이유를 알게 되었습니다.

- 이전코드

```
 useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(`/armories/characters/${params.Id}/profiles`);

        setLoading(false);
        setCharacterInfo(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getAPIData();
  }, [params.Id]);

```

- 변경코드

```
const { Engrav: CharacterEngravings } = useCharacterCollect(decodedId);

// React-Query.ts
export const useCharacterWeapon = (id: string) => {
  return useQuery<ICharacterWeapon[], Error>({
    queryKey: ['CharacterWeapon', id],
    queryFn: () => fetchCharacterWeapon(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

```
