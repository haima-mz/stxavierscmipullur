// School events for the academic year 2026-27, sourced from the official
// St. Xavier's CMI School diary (Particulars & Calendar 2026-2027).
// Each event has an ISO date so pages can automatically show only what's
// still upcoming, without needing to be edited every month.

export const SCHOOL_EVENTS = [
  { date: '2026-06-01', title: 'Pravesanotsav (Admission Festival)', category: 'Academic' },
  { date: '2026-06-03', title: 'UKG Reopening', category: 'Academic' },
  { date: '2026-06-08', title: 'Vidyarambham (Pre-KG & LKG)', category: 'Celebration' },
  { date: '2026-06-17', title: 'CCA Inauguration', category: 'Celebration' },
  { date: '2026-06-19', title: 'Reading Day', category: 'Celebration' },
  { date: '2026-06-21', title: 'International Yoga & Music Day', category: 'Celebration' },
  { date: '2026-06-27', title: "Parents' Orientation \u2013 Class I to IV", category: 'Academic' },
  { date: '2026-06-30', title: 'Investiture Ceremony (Std. I \u2013 X)', category: 'Celebration' },

  { date: '2026-07-03', title: 'St. Thomas Day', category: 'Holiday' },
  { date: '2026-07-04', title: "Parents' Orientation \u2013 Class V to X", category: 'Academic' },
  { date: '2026-07-16', title: "Father's Day Celebration (KG)", category: 'Celebration' },
  { date: '2026-07-20', title: 'Periodic Test \u2013 1 (Std. I \u2013 IX)', category: 'Academic' },
  { date: '2026-07-25', title: "Parents' Orientation \u2013 Pre-KG to UKG", category: 'Academic' },
  { date: '2026-07-28', title: 'Fruits & Vegetables Day (KG)', category: 'Celebration' },

  { date: '2026-08-01', title: 'Open House (Std. I \u2013 IX)', category: 'Academic' },
  { date: '2026-08-07', title: 'Holy Mass & Arts Fest (Std. I \u2013 X)', category: 'Celebration' },
  { date: '2026-08-10', title: 'Mid Term Examination \u2013 Std. X', category: 'Academic' },
  { date: '2026-08-15', title: 'Independence Day Celebration', category: 'Holiday' },
  { date: '2026-08-21', title: 'Onam Celebration', category: 'Celebration' },
  { date: '2026-08-26', title: 'Thiruvonam', category: 'Holiday' },
  { date: '2026-08-31', title: 'School Reopens After Onam Vacation', category: 'Academic' },

  { date: '2026-09-05', title: "Open House (KG \u2013 X) & Teachers' Day", category: 'Celebration' },
  { date: '2026-09-07', title: 'Science Exhibition (Std. I \u2013 X)', category: 'Academic' },
  { date: '2026-09-15', title: 'Flowers Day (KG)', category: 'Celebration' },
  { date: '2026-09-25', title: 'Sports Day (Std. I \u2013 X)', category: 'Celebration' },
  { date: '2026-09-26', title: "Grandparents' Day", category: 'Celebration' },

  { date: '2026-10-05', title: 'Half Yearly Examination (Std. I \u2013 X)', category: 'Academic' },
  { date: '2026-10-24', title: 'Ozora KG Kids Fest & UN Day', category: 'Celebration' },

  { date: '2026-11-14', title: "Children's Day", category: 'Celebration' },
  { date: '2026-11-21', title: 'Open House (KG \u2013 X)', category: 'Academic' },
  { date: '2026-11-23', title: 'First Model Examination \u2013 Std. X', category: 'Academic' },

  { date: '2026-12-03', title: "St. Xavier's Day", category: 'Celebration' },
  { date: '2026-12-11', title: 'Open House (Std. X)', category: 'Academic' },
  { date: '2026-12-16', title: 'Christmas Celebration', category: 'Celebration' },
  { date: '2026-12-18', title: 'Annual Day', category: 'Celebration' },
  { date: '2026-12-25', title: 'Christmas', category: 'Holiday' },
  { date: '2026-12-28', title: 'School Reopens After Christmas Vacation', category: 'Academic' },

  { date: '2027-01-11', title: 'Periodic Test II (Class I \u2013 VIII) & Second Model Exam', category: 'Academic' },
  { date: '2027-01-18', title: 'Annual Examination \u2013 Std. IX', category: 'Academic' },
  { date: '2027-01-26', title: 'Republic Day', category: 'Holiday' },
  { date: '2027-01-30', title: 'Open House (Class IX)', category: 'Academic' },

  { date: '2027-02-01', title: 'Std. X Classes Begin', category: 'Academic' },
  { date: '2027-02-06', title: 'Open House (Std. I \u2013 VIII & X)', category: 'Academic' },
  { date: '2027-02-24', title: 'CCA Demonstration (Std. I \u2013 IX)', category: 'Celebration' },
  { date: '2027-02-27', title: 'CCA Demonstration (KG)', category: 'Celebration' },

  { date: '2027-03-01', title: 'Annual Examination (Std. I \u2013 VIII)', category: 'Academic' },
  { date: '2027-03-15', title: 'Pre-KG & LKG Open House', category: 'Academic' },
  { date: '2027-03-17', title: 'KG Graduation Day', category: 'Celebration' },
  { date: '2027-03-18', title: 'School Closing Day', category: 'Celebration' },
  { date: '2027-03-19', title: "St. Joseph's Day & Parents' Day", category: 'Celebration' },
  { date: '2027-03-26', title: 'Good Friday', category: 'Holiday' },
  { date: '2027-03-28', title: 'Easter', category: 'Holiday' },
]

/** Returns events from today onward, sorted chronologically, optionally capped to `limit`. */
export function getUpcomingEvents(limit) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcoming = SCHOOL_EVENTS
    .map((e) => ({ ...e, dateObj: new Date(e.date + 'T00:00:00') }))
    .filter((e) => e.dateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj)

  return limit ? upcoming.slice(0, limit) : upcoming
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatEventBadge(dateObj) {
  return { day: dateObj.getDate(), month: MONTHS[dateObj.getMonth()] }
}
