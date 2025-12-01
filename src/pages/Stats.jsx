export default function Stats() {
  const routes = JSON.parse(localStorage.getItem('routes') || '[]')

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📊 История маршрутов</h2>
      
      {routes.length === 0 ? (
        <p className="text-gray-400">Вы ещё не строили маршруты.</p>
      ) : (
        <ul className="space-y-3">
          {routes.slice(0, 5).map((r, i) => (
            <li key={i} className="p-3 bg-gray-800 rounded">
              <strong>#{i + 1}</strong>: {r.from} → {r.to} | {new Date(r.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <button className="btn btn-secondary">Экспорт в CSV</button>
      </div>
    </div>
  )
}
