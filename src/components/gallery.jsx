import GalleryExpandedViwe from "./galleryExpandedView";

import '../stylesheets/gallery.css';

const Gallery = () => {
    const images = [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    
        'https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg?w=2000',
    
        'https://st.depositphotos.com/1679308/1622/i/600/depositphotos_16225575-stock-photo-landscape-of-croatian-nature.jpg',
    
        'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpc2FqZXMlMjBoZXJtb3Nvc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    
        'https://img.freepik.com/fotos-premium/paisaje-cascada-lagos-plitvice-croacia_31965-5308.jpg?w=2000',
    
        'https://miracomohacerlo.com/wp-content/uploads/2016/10/Fotos-de-paisajes-1024x683.jpg'
        // ... más URLs de imágenes
      ];
    
      return (
        <div className="galleryContainer">
          <h1>My Image Gallery</h1>
            <div className="image-gallery">
              <GalleryExpandedViwe images={images} />
            </div>
        </div>    
    
      );
}

export default Gallery;