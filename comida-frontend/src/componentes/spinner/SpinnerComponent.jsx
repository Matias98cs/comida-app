import { TailSpin } from 'react-loader-spinner'

const SpinnerComponent = () => {
  return (
        <TailSpin
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        />
  )
}

export default SpinnerComponent
