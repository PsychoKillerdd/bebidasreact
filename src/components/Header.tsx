import { useEffect, useMemo } from "react";
import {NavLink,useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";




export default function Header() {
    const {pathname} = useLocation();
    const isHome = useMemo(() => pathname === '/' ,[pathname]);
    const fetchCategories = useAppStore((state) => state.fetchCategories);
    
    useEffect(() => {
        fetchCategories();
    },[fetchCategories])

  return (
   <>
<header className={isHome ? 'bg-[url(/bg.jpg)] bg-center bg-cover min-h-[100dvh]' : 'bg-slate-800'}>
    <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
            <div className="">
                <img className="w-32" src="/logo.svg" alt="Logotipo" />
                {/* logo */}
            </div>
            <nav className="flex gap-4">
                <NavLink 
                to="/"
                className={({ isActive }) => (isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold') }
                >Home</NavLink>
                <NavLink 
                to="/favorites"
                className={({ isActive }) => (isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold') }
                >Favoritos</NavLink>

            </nav>
        </div>
        {isHome && (
            <form action="" className="md:w-1/2 2xl:w-1/3 bg-orange-400 rounded-lg shadow p-6 space-y-6 mt-12">
                <div className="space-y-4">
                    <label 
                    htmlFor="ingredient" 
                    className="block text-white uppercase font-extrabold text-lg"> Nombre o Ingrediente</label>
                    <input 
                    type="text" 
                    id="ingredient" 
                    name="ingredient"  
                    className="p-3 w-full rounded-lg focus:outline-none bg-white text-black" 
                    placeholder="Nombre o ingrediente. EJ.Vodka Tequila ,Cafe"/>
                </div>
                <div className="space-y-4">
                    <label 
                    htmlFor="category" 
                    className="block text-white uppercase font-extrabold text-lg"> Categoria</label>
                    <select 
                    id="category" 
                    name="category"  
                    className="p-3 w-full rounded-lg focus:outline-none bg-white text-black">
                        <option value="">-- Selecciona una categoria --</option>
                    </select>
                </div>
                <input 
                type="submit" 
                value='Buscar Recetas'
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                />
            </form>

        ) }
    </div>
   </header>
   </>
  )
}

