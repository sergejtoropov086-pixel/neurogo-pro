import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('routeFrom', from)
    localStorage.setItem('routeTo', to)
    navigate('/route')
  }

  return (
    <div className="max-w-3xl mx-auto text-center pt-10">
      <h1 className="text-4xl font-bold mb-6">🚀 Постройте идеальный маршрут</h1>
      <p className="text-gray-400 mb-10">Быстро, точно, безопасно — без рекламы и следов</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-left mb-2 text-sm">📍 Откуда</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Например: Москва, Красная площадь"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-left mb-2 text-sm">🎯 Куда</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Например: Санкт-Петербург, Дворцовая площадь"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 btn btn-primary"
        >
          Построить маршрут →
        </button>
      </form>
    </div>
  )
}
