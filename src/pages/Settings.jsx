import { useState } from 'react'

export default function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.className = newTheme
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">⚙️ Настройки</h2>
      
      <div className="mb-6">
        <label className="block mb-2">Тема:</label>
        <button onClick={toggleTheme} className="btn btn-secondary">
          {theme === 'dark' ? 'Светлая тема' : 'Темная тема'}
        </button>
      </div>

      <div className="mb-6">
        <label className="block mb-2">Ваши API-ключи:</label>
        <div className="bg-gray-800 p-3 rounded text-xs">
          <p>Геокодер: {localStorage.getItem('geocoderKey') || 'Не установлен'}</p>
          <p>Маршрутизация: {localStorage.getItem('routingKey') || 'Не установлен'}</p>
        </div>
      </div>

      <button className="btn btn-secondary">Сбросить настройки</button>
    </div>
  )
}
