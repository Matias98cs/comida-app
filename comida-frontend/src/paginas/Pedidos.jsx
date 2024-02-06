import PedidosTable from "../componentes/pedidos/PedidosTable"
import SpinnerComponent from "../componentes/spinner/SpinnerComponent"
import useComidas from "../hooks/useComidas"
import '../style/pedidos.css'

const Pedidos = () => {
  const {pedidos} = useComidas()
  return (
    <div className='pedido-container'>
      <h1>Últimos Pedidos Tomados</h1>
      <div className="pedido-table">
        {
          pedidos?.length > 1
          ?
          <PedidosTable/>
          :
          <div>
            <SpinnerComponent/>
          </div>
        }
      </div>
    </div>
  )
}

export default Pedidos
