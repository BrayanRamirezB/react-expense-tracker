import { useGlobalState } from '../../hooks/useGlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useGlobalState()

  return (
    <>
      <h3 className='text-slate-300 text-xl font-bold block w-full'>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList
