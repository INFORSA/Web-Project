import image from '../../assets/Galery/Studikasus.jpeg';
import image1 from '../../assets/Galery/Studikasus2.jpeg';
import image2 from '../../assets/Galery/LDK.jpeg';
import image3 from '../../assets/Galery/dump.jpeg';
import image4 from '../../assets/Galery/makrab.jpeg';
import image5 from '../../assets/Galery/seminar.jpeg';
import image6 from '../../assets/Galery/seminar2.jpeg';
import image7 from '../../assets/Galery/SC.jpeg';
import image8 from '../../assets/Galery/seminar3.jpeg';
import { Gallery } from "react-grid-gallery";

function Galery() {
    const images = [
        {
           src: image,
           width: 320,
           height: 174,
        //    isSelected: true,
           caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
           src: image1,
           width: 320,
           height: 212,
           tags: [
              { value: "INFORSA", title: "INFORSA" },
              { value: "Wisuda", title: "Wisuda" },
           ],
           alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
           src: image2,
           width: 350,
           height: 212,
        },
        {
            src: image3,
            width: 300,
            height: 174,
         //    isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
         },
         {
            src: image4,
            width: 500,
            height: 212,
            tags: [
               { value: "INFORSA", title: "INFORSA" },
               { value: "APLIKASI", title: "APLIKASI" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
         },
         {
            src: image5,
            width: 320,
            height: 212,
         },
         {
            src: image6,
            width: 'full',
            height: 174,
         //    isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
         },
         {
            src: image7,
            width: 250,
            height: 212,
            tags: [
               { value: "INFORSA", title: "INFORSA" },
               { value: "StudyClub", title: "StudyClub" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
         },
         {
            src: image8,
            width: 'full',
            height: 174,
         //    isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
         },
     ];
  return (
    <div className='p-5 bg-white my-3 rounded-lg shadow-xl'>
    <h1 className='text-5xl mb-3 text-start font-serif font-bold'>Galery</h1>
        <Gallery images={images} />
    </div>
  );
}

export default Galery;