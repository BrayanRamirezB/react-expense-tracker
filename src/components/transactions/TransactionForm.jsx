import { useState } from 'react'
import { useGlobalState } from '../../hooks/useGlobalState'

const TransactionForm = () => {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    })

    setDescription('')
    setAmount(0)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter a Description'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
        />
        <input
          type='number'
          step='0.01'
          placeholder='0.0'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
        />
        <button
          type='submit'
          className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'
        >
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm
