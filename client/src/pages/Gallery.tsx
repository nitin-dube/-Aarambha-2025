import { motion } from 'framer-motion'
import { Camera, Image as ImageIcon, Video, Music } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'

const Gallery = () => {
  // Placeholder gallery items
  const galleryItems = [
    { id: 1, type: 'image', title: 'Event Preparation', category: 'Behind the Scenes' },
    { id: 2, type: 'image', title: 'Cultural Performances', category: 'Performances' },
    { id: 3, type: 'image', title: 'Food Fiesta', category: 'Food & Drinks' },
    { id: 4, type: 'image', title: 'Mr. & Ms. Fresher', category: 'Competitions' },
    { id: 5, type: 'image', title: 'Dance Performances', category: 'Performances' },
    { id: 6, type: 'image', title: 'Crowd Moments', category: 'Crowd' },
    { id: 7, type: 'image', title: 'Award Ceremony', category: 'Awards' },
    { id: 9, type: 'image', title: 'Venue Setup', category: 'Venue' },
    { id: 10, type: 'image', title: 'Student Interactions', category: 'Students' },
    { id: 11, type: 'image', title: 'Music Performances', category: 'Performances' },
    { id: 12, type: 'image', title: 'Event Highlights', category: 'Highlights' }
  ]

  const categories = ['All', 'Performances', 'Food & Drinks', 'Competitions', 'Crowd', 'Awards', 'Venue', 'Students', 'Highlights', 'Behind the Scenes']

  const getPlaceholderImage = (index: number) => {
    const colors = [
      'bg-gradient-to-br from-primary-400 to-primary-600',
      'bg-gradient-to-br from-secondary-400 to-secondary-600',
      'bg-gradient-to-br from-accent-400 to-accent-600',
      'bg-gradient-to-br from-green-400 to-green-600',
      'bg-gradient-to-br from-purple-400 to-purple-600',
      'bg-gradient-to-br from-pink-400 to-pink-600'
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-max section-padding">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Camera size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gallery
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Relive the amazing moments from Aarambha Mahotsava 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Memories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing the spirit and energy of our grand celebration
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'primary' : 'outline'}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden p-0">
                  <div className={`h-48 ${getPlaceholderImage(index)} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <ImageIcon size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">Image Placeholder</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.category}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Camera size={24} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Gallery Coming Soon!
              </h3>
              <p className="text-gray-600 mb-6">
                We're preparing an amazing gallery of photos and videos from Aarambha Mahotsava 2025. 
                Check back after the event to see all the incredible moments captured during our celebration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary">
                  Get Notified
                </Button>
                <Button variant="outline">
                  Share Your Photos
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Photo Submission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Moments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have photos or videos from the event? Share them with us!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ImageIcon size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Photos
              </h3>
              <p className="text-gray-600 text-sm">
                Share your best photos from the event
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Video size={24} className="text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Videos
              </h3>
              <p className="text-gray-600 text-sm">
                Upload your event videos and highlights
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Music size={24} className="text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Audio
              </h3>
              <p className="text-gray-600 text-sm">
                Share audio recordings from performances
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" size="lg">
              Submit Your Content
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
