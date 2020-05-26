import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { LaunchInterface } from './interfaces'
import { GalleryPhoto, CarouselPhoto } from './types'

interface ImageGalleryProps {
  launch: LaunchInterface;
}

// react-photo-gallery package is causing warnings due to not using hooks.
const ImageGallery = ({ launch }: ImageGalleryProps): JSX.Element => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const photosForGallery: GalleryPhoto[] = launch.links.flickr_images.map((src) => ({ src, width: 1, height: 1 }))
  const viewsForCarousel: CarouselPhoto[] = launch.links.flickr_images.map((source) => ({ source }))

  const openLightbox = useCallback(({ index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = (): void => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Gallery photos={photosForGallery} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={viewsForCarousel}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

export default ImageGallery
