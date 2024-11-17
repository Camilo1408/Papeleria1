import Norma from "../assets/Images/norma.png"
import Sharpie from "../assets/Images/sharpie.jpg"
import Cassio from "../assets/Images/casio.jpg"

const categories = [
    {
        title: '',
        imageUrl: Norma
    },
    {
        title: '',
        imageUrl: Sharpie,
    },
    {
        title: '',
        imageUrl: Cassio,
    },
];

const CategorySection = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
            {categories.map((category,index)=>(
                <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src={category.imageUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
                    <div className="absolute top-20 left-12">
                        <p className="text-xl font-bold">{category.title}</p>
                        <p className="text-gray-600"></p>
                    </div>
                </div>
            ))}
        </div>
    ); 
};

export default CategorySection;
   