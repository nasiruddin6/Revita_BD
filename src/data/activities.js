export const activities = [
  {
    id: 'community-outreach',
    slug: 'community-outreach',
    title: 'Community Outreach',
    description:
      'Neighbourhood programmes that listen first, then organise with local people for dignity and daily needs.',
    icon: 'outreach',
    body: [
      'Outreach at REVITA starts with listening. Before a kit is packed or a meeting is called, organisers sit with neighbours, note what is actually needed, and plan with the people who will live with the result.',
      'Work takes the shape of courtyard conversations, household visits, and small, repeatable programmes — food support, information on public services, and accompaniment when a family has to navigate an office or a hospital.',
      'The aim is not a one-day event. It is a relationship: volunteers who return, names that are remembered, and communities that lead the next step themselves.',
    ],
    gallery: [
      { id: 'outreach-1', alt: 'Listening session in a neighbourhood courtyard' },
      { id: 'outreach-2', alt: 'Volunteers visiting households' },
      { id: 'outreach-3', alt: 'Community meeting under an open sky' },
    ],
  },
  {
    id: 'education-support',
    slug: 'education-support',
    title: 'Education Support',
    description:
      'Study circles, school kits, and mentoring for children who are too often pushed to the margins.',
    icon: 'education',
    body: [
      'Education support is for children who miss class because of cost, distance, or the quiet assumption that school is not for them. REVITA runs study circles after hours, with volunteer mentors who stay with a small group through the term.',
      'School kits, exam-fee help, and reading corners are practical — but the core is time. A student who is seen every week is less likely to disappear from the roll.',
      'Parents and older siblings are invited in, so the work does not sit only on a child’s shoulders. Learning becomes a household decision, not a charity visit.',
    ],
    gallery: [
      { id: 'education-1', alt: 'After-school study circle' },
      { id: 'education-2', alt: 'School kits ready for distribution' },
      { id: 'education-3', alt: 'Mentor sitting with students' },
    ],
  },
  {
    id: 'health-wellbeing',
    slug: 'health-wellbeing',
    title: 'Health & Wellbeing',
    description:
      'Awareness camps, first-aid training, and voluntary blood donation drives across communities.',
    icon: 'health',
    body: [
      'Health work at REVITA is preventive and collective: blood donation camps, first-aid training for volunteers, and awareness sessions on nutrition, menstrual health, and when to seek care.',
      'Camps are hosted with local partners so people do not have to travel far. Donors are followed up with, not treated as a one-time count on a banner.',
      'Wellbeing also means the organisers themselves — rest, safety, and clear roles — because a tired volunteer line cannot hold a community through a crisis.',
    ],
    gallery: [
      { id: 'health-1', alt: 'Voluntary blood donation camp' },
      { id: 'health-2', alt: 'First-aid training for volunteers' },
      { id: 'health-3', alt: 'Health awareness session with residents' },
    ],
  },
  {
    id: 'advocacy-rights',
    slug: 'advocacy-rights',
    title: 'Advocacy & Rights',
    description:
      'Standing with communities so every voice is heard, counted, and defended — in rooms that matter.',
    icon: 'advocacy',
    body: [
      'Advocacy here is not a slogan on a stage. It is accompaniment: helping people document a grievance, sit in a meeting they were not invited to, and speak in their own language about land, safety, wages, or schooling.',
      'REVITA convenes open dialogues — students, workers, and neighbours in the same room as those who hold office — and follows through when the room empties.',
      'The measure of this work is whether a person who was unheard last season can walk in with a file, a neighbour, and a clear ask.',
    ],
    gallery: [
      { id: 'advocacy-1', alt: 'Open dialogue on community rights' },
      { id: 'advocacy-2', alt: 'Residents speaking at a public forum' },
      { id: 'advocacy-3', alt: 'Organisers preparing case notes' },
    ],
  },
]

export function activityPath(activity) {
  return `/activities/${activity.slug}`
}

export function getActivityBySlug(slug) {
  return activities.find((item) => item.slug === slug) ?? null
}
