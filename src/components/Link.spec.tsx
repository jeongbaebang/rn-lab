import React from 'react'
import { describe, expect, test } from '@jest/globals'
import { render, screen, userEvent } from '@testing-library/react-native'

import Link from './Link'
import { Text } from 'react-native'

const mockedNavigate = jest.fn()

jest.mock('@react-navigation/native', () => {
  return {
    __esModule: true,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  }
})

//  테스트 코드를 작성할 때는 이 컴포넌트의 핵심 기능과 행위를 중심으로 다음과 같은 사항들을 검증하는 것이 좋다.
describe('Link Component', () => {
  const expectedLink = 'Home'
  const childrenText = 'TestComponentItem'
  const TestComponent = () => {
    return <Text>{childrenText}</Text>
  }
  const TestComponentWithProps = ({ text }: { text: string }) => {
    return <Text>{text}</Text>
  }

  test('Link 컴포넌트는 전달된 컴포넌트를 감싸는 HOC 형태를 띄고 있어야 한다.', () => {
    const NewComponent = Link(TestComponent, expectedLink)

    render(<NewComponent />)

    expect(screen.getByText(childrenText)).toBeOnTheScreen()
  })

  test('터치 이벤트가 발생하면 컴포넌트는 지정한 네비게이터를 호출해야 한다.', async () => {
    const user = userEvent.setup()
    const NewComponent = Link(TestComponent, expectedLink)
    const TargetComponent = render(<NewComponent />).getByText(childrenText)

    await user.press(TargetComponent)

    expect(mockedNavigate).toHaveBeenCalledWith(expectedLink)
  })

  test('props를 전달하면 자식 컴포넌트를 올바르게 렌더링 되어야 한다.', () => {
    const childrenProps = 'new children Props'
    const NewComponent = Link(TestComponentWithProps, expectedLink)

    const TargetComponent = render(
      <NewComponent text={childrenProps} />,
    ).getByText(childrenProps)

    expect(TargetComponent).toBeOnTheScreen()
  })

  test('파라미터를 전달한다면 네비게이터가 호출될떄 파라미터 인자를 포함하고 있어야 한다.', async () => {
    const user = userEvent.setup()
    const childrenProps = 'new children Props'
    const newParm = {
      id: 'TEST ID',
    }
    const NewComponent = Link(
      TestComponentWithProps,
      expectedLink,
      newParm as any, // 파라미터 전달
    )
    const TargetComponent = render(
      <NewComponent text={childrenProps} />,
    ).getByText(childrenProps)

    await user.press(TargetComponent)

    expect(mockedNavigate).toHaveBeenCalledWith(expectedLink, newParm)
  })
})
