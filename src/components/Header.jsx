import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'Маршрут', path: '/route' },
  { name: 'Статистика', path: '/stats' },
  { name: 'Настройки', path: '/settings' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-400">NeuroGo Pro</Link>
        <nav className="flex space-x-6">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1 rounded transition ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
