import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

const AboutGallery = () => {
    const usePhotos = () => {
      const data = useStaticQuery(
        graphql`
          query {
            allGoogleGaleriaSheet {
              edges {
                node {
                id
                src
                width
                height
                }
              }
            }
          }
          `
      )
      return data.allGoogleGaleriaSheet.edges
    }
  
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback(({index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
     const photos = usePhotos().map(({ node }) => {
      const photo = {};
      photo['id'] = node.id;
      photo['src'] = node.src;
      photo['width'] = node.width;
      photo['height'] = node.height;
      return photo;
  })
  
  console.log(photos);
  
    return (
      < >
        <Gallery photos={photos} onClick={openLightbox}  key={photos.id}/>
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
              ) : null}
            </ModalGateway> 
          
      </>
    )
  };
  
  
  export default AboutGallery