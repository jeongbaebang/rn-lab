import React, { ComponentType, useEffect } from 'react'

// JSX.IntrinsicAttributes를 포함하는 Props 타입을 재사용 가능하게 정의
type IntrinsicProps<P> = P & JSX.IntrinsicAttributes

export default function WithLog<P>(
  Component: ComponentType<P>,
): ComponentType<IntrinsicProps<P>> {
  return function HOC(props: IntrinsicProps<P>) {
    useEffect(() => {
      console.log('Component is rendered or updated with props:', props)
    }, [props])

    return <Component {...props} />
  }
}

// const withHook = <P,>(useHook: (props: P) => void) => {
//   return (Component: ComponentType<P>): ComponentType<IntrinsicProps<P>> => {
//     // 함수형 컴포넌트를 반환하는 HOC
//     const HOC = (props: IntrinsicProps<P>) => {
//       useHook(props) // Hook 실행
//       return <Component {...props} />
//     }
//     return HOC
//   }
// }

// // 사용 예시: 로깅 기능을 추가하는 Hook
// const useLogging = <P,>(props: P) => {
//   useEffect(() => {
//     console.log('Component is rendered or updated with props:', props)
//   }, [props])
// }

// withLogging HOC 생성: useLogging Hook을 사용
// const withLogging = withHook(useLogging)
