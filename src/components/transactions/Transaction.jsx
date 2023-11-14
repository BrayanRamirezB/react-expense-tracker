import PropTypes from 'prop-types'
import { useGlobalState } from '../../hooks/useGlobalState'

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState()

  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
      <p className='text-sm'>{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id)
          }}
          className='bg-yellow-500 text-white px-3 py-2 rounded-lg mx-3'
        >
          Delete
        </button>
      </div>
    </li>
  )
}

Transaction.propTypes = {
  transaction: PropTypes.object
}

export default Transaction
