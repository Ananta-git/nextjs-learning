
import { NewsItem, FeatureItem} from '../types'


export const newsItem: NewsItem[] = [
    {
        id:1,
        title: 'Annual Sports Day 2025',
        excerpt: 'join us for our annual sports day celebration on December 15th....',
        date: '2025-12-01',
        category: 'Event'
    },
    {
        id:2,
        title: 'New computer Lab Inauguration',
        excerpt: 'The new computer lab with 30 systems will be inaugurated next week',
        date: '2025-11-20',
        category: 'Infrastructure'
    },
    {
        id:3,
        title: 'Exam schedule Published',
        excerpt: 'Final term examination schedule has been published for all classes ...',
        date: '2025-11-10',
        category: 'Academics'   
    }
]

export const featureItems: FeatureItem[] = [
  {
    title: 'Quality Education',
    description: 'We provide quality education with experienced teachers and modern teaching methods.',
    icon: '🎓'
  },
  {
    title: 'Modern Facilities',
    description: 'Our campus features modern classrooms, computer labs, science labs, and library.',
    icon: '🏫'
  },
  {
    title: 'Sports & Activities',
    description: 'We encourage students to participate in various sports and extracurricular activities.',
    icon: '⚽'
  }
]