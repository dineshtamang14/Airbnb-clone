import Image from "next/dist/client/image";
import {HeartIcon} from "@heroicons/react/outline";
import {StartIcon} from "@heroicons/react/solid";

function InfoCard({img, location, title, description, star, price, total}) {
    return (
        <div>
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div>
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
            </div>

        </div>
    );
}

export default InfoCard;
