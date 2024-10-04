import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <div className="flex justify-center items-center mr-2">
            <FaArrowAltCircleLeft
                onClick={() => scrollPrev()}
                className="text-2xl cursor-pointer hidden lg:block"
            />
        </div>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <div className="flex justify-center items-center ml-2">
            <FaArrowAltCircleRight
                onClick={() => scrollNext()}
                className="text-2xl cursor-pointer hidden lg:block"
            />
        </div>
    );
};

export default function ImageSrollbar({ data }) {
    return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
        {data.map((item) => (
          <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
            <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
          </Box>
        ))}
      </ScrollMenu>
    );
}
