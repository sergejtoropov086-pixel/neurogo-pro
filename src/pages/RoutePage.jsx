import { useEffect, useRef, useState } from 'react'
import { YMaps, Map, Route } from '@yandex/ymaps'

// ВАШИ КЛЮЧИ — НЕ МЕНЯЙТЕ, ОНИ РАБОТАЮТ!
const GEOCODER_KEY = "2234f14e-a26e-42e7-b494-e6f8c0f9bc3b" // Геокодер
const ROUTING_KEY = "26a5326e-3119-4c44-aea7-377da2892e04" // Маршрутизация

export default function RoutePage() {
  const from = localStorage.getItem('routeFrom') || 'Москва'
  const to = localStorage.getItem('routeTo') || 'Санкт-Петербург'
  const [ymap, setYmap] = useState(null)
  const [loading, setLoading] = useState(true)

  const mapRef = useRef(null)

  useEffect(() => {
    if (!ymap) return
    ymap.geoObjects.removeAll()
    ymap.route([from, to], {
      multiRoute: true,
      resultsPerPage: 1
    }).then(route => {
      route.model.setParams({ results: 1 }, true)
      route.getPaths().each(path => path.options.set({ strokeColor: "#007AFF", strokeWidth: 6 }))
      ymap.geoObjects.add(route)
      ymap.setBounds(route.getBounds(), { checkZoomRange: true })
      setLoading(false)
    }).catch(err => {
      console.error("Ошибка построения маршрута:", err)
      setLoading(false)
    })
  }, [ymap, from, to])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🗺️ Ваш маршрут</h2>
      <p className="text-gray-400 mb-6">От: <strong>{from}</strong> → Куда: <strong>{to}</strong></p>

      <YMaps query={{ apikey: GEOCODER_KEY, lang: 'ru_RU' }}>
        <div style={{ height: '600px', borderRadius: '12px', overflow: 'hidden' }}>
          <Map
            instanceRef={setYmap}
            defaultState={{ center: [37.6, 55.75], zoom: 10 }}
            width="100%"
            height="100%"
          />
        </div>
      </YMaps>

      {loading && (
        <div className="loading-map">Загрузка маршрута...</div>
      )}

      <div className="mt-6 flex gap-3">
        <button className="btn btn-secondary">Сохранить</button>
        <button className="btn btn-primary">Поделиться</button>
        <button onClick={() => window.history.back()} className="btn btn-secondary">Назад</button>
      </div>
    </div>
  )
}
