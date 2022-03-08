import styled from 'styled-components'
import tw from 'twin.macro' //! allows us to use Tailwind classes in nested properties
/* This library will use the babel plugin macros config (babel.plugin.js) to transform the Tailwind CSS utility classes used by nested selectors into readable code that Styled Components can understand. */
const StyledForm = styled.main.attrs({
  className: 'flex flex-col h-screen justify-center items-center bg-gray-100',
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
`
export default StyledForm
