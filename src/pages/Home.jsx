/* eslint-disable react-hooks/exhaustive-deps */
import { mockData } from "../assets/mockData";    

import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";




const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [])

    const handleClick = () => {
        navigate('/shop');
    }

    return (
        <div>
                <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/src/assets/Images/header.jpg')"}}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Compra con nosotros</h1>
                        <p className="text-lg md:text-2xl text-white mb-8">Descubre fascinantes descuentos y promociones</p>
                        <button onClick={handleClick} className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 tansform transition duration-300 hover:scale-105">Tienda</button>
                    </div>
                </div>
            <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
                <InfoSection/>
                <h2 className="text-2x1 font-bold mb-6 text-center">Marcas recomendadas</h2>
                <CategorySection />

                <div className="container mx-auto py-12">
                    <h2 className="text-2x1 font-bold mb-6 text-center">Productos recomendados</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                    {products.products.slice(0,5).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;