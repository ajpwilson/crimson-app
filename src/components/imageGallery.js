import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

// react-photo-gallery package is causing warnings due to not using hooks.
const ImageGallery = ({ launch }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const photos = launch.links.flickr_images.map(src => ({ src, width: 1, height: 1 }))

  const openLightbox = useCallback((e, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null }
      </ModalGateway>
    </div>
  )
}

ImageGallery.propTypes = {
  launch: PropTypes.shape({
    links: PropTypes.any,
    flickr_images: PropTypes.string
  }).isRequired
}

export default ImageGallery
