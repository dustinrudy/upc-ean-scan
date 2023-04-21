import { Carousel, Image} from "antd";
import NoImageFound from '../../assets/no-image-found.jpg'




export const PhotoCarousel = ({ images }: { images: string[]}) => {

    return (
        <Carousel dotPosition={'left'}>
            {images.map((imageURL, key) => {
                return (
                  <div key={key}>
                    <Image 
                        style={{objectFit: 'contain'}}
                        width={500}
                        height={400}
                        src={imageURL}
                        alt="example"
                        fallback={NoImageFound}
                    />
                  </div>
                )
            })}
        </Carousel>
        )
}