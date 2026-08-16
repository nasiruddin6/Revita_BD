export const events = [
  {
    id: 'volunteer-meet-2026',
    title: 'National Volunteer Meet',
    excerpt:
      'Organisers from eight districts gathered in Dhaka to share field notes and plan the next quarter of community work.',
    date: '2026-08-02',
    location: 'Dhaka',
    href: '/news',
  },
  {
    id: 'flood-relief-2026',
    title: 'Flood Relief Distribution',
    excerpt:
      'Food, water, and hygiene kits reached families in low-lying neighbourhoods after the July monsoon flooding.',
    date: '2026-07-18',
    location: 'Sunamganj',
    href: '/news',
  },
  {
    id: 'student-dialogue-2026',
    title: 'Open Dialogue on Student Rights',
    excerpt:
      'A public forum where students, teachers, and organisers spoke on safety, dignity, and the right to be heard.',
    date: '2026-07-05',
    location: 'Chattogram',
    href: '/news',
  },
]

export function formatEventDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function eventDateParts(iso) {
  const date = new Date(`${iso}T00:00:00`)
  return {
    day: date.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: date.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
  }
}
