/* ==================================================================
   CONTACTS CONFIG — единственный источник контактных данных
   Меняем здесь → обновляется в JS (sidebar, etc.)
   ================================================================== */
const CONTACTS = {
	telegram: { handle: '@yusdanil', url: 'https://t.me/yusdanil' },
	phone: { display: '+7 999 132-31-41', url: 'tel:+79991323141' },
}

/* ==================================================================
   DATA MODEL — ВСЕ ОБЪЕКТЫ НЕДВИЖИМОСТИ
   ------------------------------------------------------------------
   Чтобы добавить новый объект:
   1. Скопируй любой блок ниже
   2. Поменяй данные (id — следующий по порядку)
   3. Сохрани файл — объект появится в каталоге

   Поля:
   - id (number)           — уникальный номер
   - propertyType (string) — 'apartment' или 'house'
   - rooms (number)        — кол-во комнат (4+ = просто 4, 5...)
   - area (number)         — площадь м²
   - floor (number)        — этаж (для домов: 1)
   - totalFloors (number)  — этажность дома/здания
   - price (number)        — цена в ₽/мес
   - deposit (string)      — депозит текстом
   - district (string)     — район Казани
   - address (string)      — адрес
   - title (string)        — заголовок карточки
   - description (string)  — полное описание
   - images (string[])     — URL фотографий (первая = обложка)
   - features (string[])   — удобства
   ================================================================== */
const PROPERTIES = [
	{
		id: 1,
		propertyType: 'apartment',
		rooms: 1,
		area: 38,
		floor: 5,
		totalFloors: 16,
		price: 22000,
		deposit: '1 месяц',
		district: 'Ново-Савиновский',
		address: 'ул. Амирхана, 17',
		title: '1-комнатная, ул. Амирхана',
		description:
			'Светлая квартира с отличным ремонтом рядом с парком Победы. Полностью меблирована: кухня со встроенной техникой, двуспальная кровать, рабочий стол. Метро «Козья Слобода» в пешей доступности.',
		images: [
			'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
		],
		features: ['Wi-Fi', 'Стиральная машина', 'Кондиционер', 'Балкон', 'Парковка', 'Метро 7 мин'],
	},
	{
		id: 2,
		propertyType: 'apartment',
		rooms: 2,
		area: 56,
		floor: 8,
		totalFloors: 22,
		price: 35000,
		deposit: '1 месяц',
		district: 'Вахитовский',
		address: 'ул. Пушкина, 32',
		title: '2-комнатная, центр',
		description:
			'Просторная двушка в 5 минутах от Кремля. Панорамные окна, дизайнерский ремонт, два санузла. Полностью оборудованная кухня, Smart TV.',
		images: [
			'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=500&fit=crop',
		],
		features: ['Wi-Fi', 'Посудомоечная машина', 'Smart TV', '2 санузла', 'Центр города', 'Лифт'],
	},
	{
		id: 3,
		propertyType: 'apartment',
		rooms: 3,
		area: 78,
		floor: 3,
		totalFloors: 10,
		price: 45000,
		deposit: '1 месяц',
		district: 'Советский',
		address: 'ул. Мусина, 68',
		title: '3-комнатная, ул. Мусина',
		description:
			'Семейная квартира с отдельными комнатами, просторной кухней-гостиной и двумя балконами. Рядом школа, детсад, парк. Тихий район.',
		images: [
			'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop',
		],
		features: ['Wi-Fi', 'Стиральная машина', 'Посудомойка', '2 балкона', 'Кладовая', 'Школа рядом'],
	},
	{
		id: 4,
		propertyType: 'apartment',
		rooms: 2,
		area: 52,
		floor: 15,
		totalFloors: 20,
		price: 28000,
		deposit: '1 месяц',
		district: 'Приволжский',
		address: 'ул. Гарифьянова, 25',
		title: '2-комнатная, Горки',
		description:
			'Современная квартира в ЖК «Горки Парк» с видом на Казанку. Евроремонт 2023, новая мебель и техника. Подземная парковка включена.',
		images: [
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop',
		],
		features: ['Wi-Fi', 'Подземная парковка', 'Кондиционер', 'Вид на реку', 'Новая мебель', 'ТЦ «Мега» рядом'],
	},
	{
		id: 5,
		propertyType: 'apartment',
		rooms: 1,
		area: 40,
		floor: 6,
		totalFloors: 9,
		price: 18000,
		deposit: '1 месяц',
		district: 'Авиастроительный',
		address: 'ул. Копылова, 14',
		title: '1-комнатная, ул. Копылова',
		description:
			'Бюджетный вариант в спокойном районе. Косметический ремонт, вся мебель и техника. Рядом транспорт и магазины.',
		images: [
			'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
		],
		features: ['Wi-Fi', 'Стиральная машина', 'Новый ламинат', 'Магазины рядом', 'Трамвай 3 мин', 'Тихий двор'],
	},
	{
		id: 6,
		propertyType: 'apartment',
		rooms: 4,
		area: 95,
		floor: 4,
		totalFloors: 12,
		price: 65000,
		deposit: '2 месяца',
		district: 'Вахитовский',
		address: 'ул. Островского, 7',
		title: '4-комнатная, центр, премиум',
		description:
			'Элитная квартира с авторским ремонтом. Итальянская мебель, техника Miele. Четыре комнаты, гардеробная, два санузла с тёплым полом. Консьерж, паркинг.',
		images: [
			'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop',
		],
		features: ['Wi-Fi', 'Консьерж', 'Тёплый пол', 'Гардеробная', 'Паркинг', 'Техника Miele'],
	},
	{
		id: 7,
		propertyType: 'house',
		rooms: 3,
		area: 120,
		floor: 1,
		totalFloors: 2,
		price: 55000,
		deposit: '2 месяца',
		district: 'Приволжский',
		address: 'пос. Константиновка, ул. Озёрная, 14',
		title: 'Дом 120 м², Константиновка',
		description:
			'Двухэтажный кирпичный дом. Первый этаж: кухня-гостиная 30 м², санузел. Второй: три спальни, ванная. Участок 6 соток, баня, парковка на 2 машины. Газ, центральная вода.',
		images: [
			'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
		],
		features: [
			'Участок 6 соток',
			'Баня',
			'Газовое отопление',
			'Парковка 2 авто',
			'Центральная вода',
			'Тихий район',
		],
	},
	{
		id: 8,
		propertyType: 'house',
		rooms: 4,
		area: 180,
		floor: 1,
		totalFloors: 2,
		price: 85000,
		deposit: '2 месяца',
		district: 'Советский',
		address: 'пос. Вознесенское, ул. Дачная, 22',
		title: 'Дом 180 м², Вознесенское',
		description:
			'Просторный дом для большой семьи. Четыре спальни, два санузла, кабинет. Большая кухня-столовая с террасой. Участок 10 соток, гараж, детская площадка. Охраняемый посёлок.',
		images: [
			'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
		],
		features: ['Участок 10 соток', 'Гараж на 2 авто', 'Терраса', 'Охрана посёлка', 'Детская площадка', 'Кабинет'],
	},
	{
		id: 9,
		propertyType: 'apartment',
		rooms: 1,
		area: 34,
		floor: 12,
		totalFloors: 25,
		price: 25000,
		deposit: '1 месяц',
		district: 'Ново-Савиновский',
		address: 'пр. Ямашева, 103',
		title: '1-комнатная, пр. Ямашева',
		description:
			'Хороший ремонт в новом доме. Компактная функциональная планировка. Высокий этаж с видом на город. Метро в 10 минутах.',
		images: [
			'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
			'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
		],
		features: ['Wi-Fi', 'Стиральная машина', 'Вид на город', 'Метро 10 мин', 'Лифт', 'Консьерж'],
	},
]

/* ====== NAV ====== */
let currentProperty = null
let currentImageIndex = 0

function setActiveNav() {
	const page = document.body?.dataset?.page
	if (!page) return
	document
		.querySelectorAll('.nav-link[data-page]')
		.forEach(l => l.classList.toggle('active', l.dataset.page === page))
}

/* ====== CATALOG ====== */
function populateDistrictFilter() {
	const s = document.getElementById('filterDistrict')
	if (!s || s.options.length > 1) return
	;[...new Set(PROPERTIES.map(p => p.district))].sort().forEach(d => {
		const o = document.createElement('option')
		o.value = d
		o.textContent = d
		s.appendChild(o)
	})
}

function getFiltered() {
	const pt = document.getElementById('filterPropertyType')?.value
	const rm = document.getElementById('filterRooms')?.value
	const di = document.getElementById('filterDistrict')?.value
	const mn = document.getElementById('filterPriceMin')?.value
	const mx = document.getElementById('filterPriceMax')?.value
	return PROPERTIES.filter(p => {
		if (pt && p.propertyType !== pt) return false
		if (rm) {
			const r = parseInt(rm)
			if (r === 4 ? p.rooms < 4 : p.rooms !== r) return false
		}
		if (di && p.district !== di) return false
		if (mn && p.price < parseInt(mn)) return false
		if (mx && p.price > parseInt(mx)) return false
		return true
	})
}

function renderCatalog() {
	const grid = document.getElementById('propertiesGrid')
	if (!grid) return
	const list = getFiltered()
	const n = list.length
	let w = 'объектов'
	if (n % 10 === 1 && n % 100 !== 11) w = 'объект'
	else if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) w = 'объекта'
	const results = document.getElementById('resultsCount')
	if (results) results.innerHTML = `Найдено: <strong>${n}</strong> ${w}`

	grid.innerHTML = list
		.map((p, i) => {
			const h = p.propertyType === 'house'
			return `<a class="prop-card fade-in stagger-${(i % 5) + 1}" href="property.html?id=${p.id}">
            <div class="prop-card-img"><img src="${p.images[0]}" alt="${p.title}" loading="lazy"><span class="prop-badge ${h ? 'house' : ''}">${h ? 'Дом' : 'Квартира'}</span></div>
            <div class="prop-card-body">
                <div class="prop-price">${p.price.toLocaleString('ru-RU')} ₽ <span>/ мес</span></div>
                <div class="prop-address">${p.district}, ${p.address}</div>
                <div class="prop-meta">
                    <span class="prop-meta-item">◻ ${p.rooms}-комн.</span>
                    <span class="prop-meta-item">▭ ${p.area} м²</span>
                    <span class="prop-meta-item">▲ ${h ? p.totalFloors + ' эт.' : p.floor + '/' + p.totalFloors + ' эт.'}</span>
                </div>
            </div></a>`
		})
		.join('')
	setTimeout(observeAnimations, 50)
}

function applyFilters() {
	renderCatalog()
}
function resetFilters() {
	;['filterPropertyType', 'filterRooms', 'filterDistrict', 'filterPriceMin', 'filterPriceMax'].forEach(id => {
		const el = document.getElementById(id)
		if (el) el.value = ''
	})
	renderCatalog()
}

/* ====== PROPERTY DETAIL ====== */
function renderProperty(id) {
	const p = PROPERTIES.find(x => x.id === id)
	if (!p) return
	currentProperty = p
	currentImageIndex = 0
	const mainImage = document.getElementById('propMainImage')
	const dots = document.getElementById('galleryDots')
	const sidebar = document.getElementById('propSidebar')
	const info = document.getElementById('propInfo')
	if (!mainImage || !dots || !sidebar || !info) return

	mainImage.src = p.images[0]
	dots.innerHTML = p.images
		.map((_, i) => `<div class="gallery-dot ${i === 0 ? 'active' : ''}" onclick="goToImage(${i})"></div>`)
		.join('')

	const h = p.propertyType === 'house'
	const comm = Math.round(p.price * 0.2).toLocaleString('ru-RU')

	sidebar.innerHTML = `
        <div class="prop-sidebar-price">${p.price.toLocaleString('ru-RU')} ₽ <span>/ мес</span></div>
        <span class="prop-sidebar-type ${h ? 'house' : ''}">${h ? 'Дом' : 'Квартира'} · Долгосрочная аренда</span>
        <div class="prop-sidebar-specs">
            <div class="spec-item"><div class="spec-label">Комнаты</div><div class="spec-value">${p.rooms}</div></div>
            <div class="spec-item"><div class="spec-label">Площадь</div><div class="spec-value">${p.area} м²</div></div>
            <div class="spec-item"><div class="spec-label">${h ? 'Этажность' : 'Этаж'}</div><div class="spec-value">${h ? p.totalFloors + ' эт.' : p.floor + ' / ' + p.totalFloors}</div></div>
            <div class="spec-item"><div class="spec-label">Район</div><div class="spec-value">${p.district}</div></div>
        </div>
        <div class="deal-terms">
            <div class="deal-terms-title">Условия сделки</div>
            <div class="deal-terms-row"><span class="label">Комиссия</span><span class="value">20% · ${comm} ₽</span></div>
            <div class="deal-terms-row"><span class="label">Депозит</span><span class="value">${p.deposit}</span></div>
            <div class="deal-terms-row"><span class="label">Договор</span><span class="value">До оплаты</span></div>
        </div>
        <div class="sidebar-contacts">
            <a class="btn-telegram" href="${CONTACTS.telegram.url}" target="_blank" rel="noopener">✈ Написать в Telegram</a>
            <a class="btn-phone" href="${CONTACTS.phone.url}">📞 ${CONTACTS.phone.display}</a>
        </div>`

	info.innerHTML = `
        <h2>${p.title}</h2><p>${p.description}</p>
        <h2 style="font-size:1.15rem;margin-bottom:14px;">Удобства</h2>
        <div class="prop-features">${p.features.map(f => `<div class="prop-feature"><span style="color:var(--accent);font-weight:700;">✓</span> ${f}</div>`).join('')}</div>`
}

function goToImage(i) {
	if (!currentProperty) return
	currentImageIndex = i
	document.getElementById('propMainImage').src = currentProperty.images[i]
	document.querySelectorAll('.gallery-dot').forEach((d, j) => d.classList.toggle('active', j === i))
}
function nextImage() {
	if (currentProperty) goToImage((currentImageIndex + 1) % currentProperty.images.length)
}
function prevImage() {
	if (currentProperty)
		goToImage((currentImageIndex - 1 + currentProperty.images.length) % currentProperty.images.length)
}

/* ====== MOBILE NAV ====== */
function toggleMobileNav() {
	document.getElementById('mobileNav').classList.toggle('open')
}
function closeMobileNav() {
	document.getElementById('mobileNav').classList.remove('open')
}

/* ====== ANIMATIONS ====== */
function observeAnimations() {
	const obs = new IntersectionObserver(
		es =>
			es.forEach(e => {
				if (e.isIntersecting) e.target.classList.add('visible')
			}),
		{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
	)
	document.querySelectorAll('.fade-in:not(.visible)').forEach(el => obs.observe(el))
}

function initCatalogIfPresent() {
	if (!document.getElementById('propertiesGrid')) return
	populateDistrictFilter()
	renderCatalog()
}

function initPropertyFromQuery() {
	if (!document.getElementById('propInfo')) return
	const params = new URLSearchParams(window.location.search)
	const id = parseInt(params.get('id') || '', 10)
	if (!id) {
		const info = document.getElementById('propInfo')
		const sidebar = document.getElementById('propSidebar')
		if (info) {
			info.innerHTML = '<h2>Объект не найден</h2><p>Проверьте ссылку или вернитесь в каталог.</p>'
		}
		if (sidebar) {
			sidebar.innerHTML = `<div class="sidebar-contacts">
            <a class="btn-telegram" href="${CONTACTS.telegram.url}" target="_blank" rel="noopener">✈ Написать в Telegram</a>
            <a class="btn-phone" href="${CONTACTS.phone.url}">📞 ${CONTACTS.phone.display}</a>
        </div>`
		}
		return
	}
	renderProperty(id)
}

document.addEventListener('DOMContentLoaded', () => {
	setActiveNav()
	initCatalogIfPresent()
	initPropertyFromQuery()
	observeAnimations()
})
