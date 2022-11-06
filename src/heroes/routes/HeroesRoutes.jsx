import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"

import { DCPage, HeroDetails, MarvelPage, SearchHero } from '../'

export const  HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />

                    <Route path="search" element={<SearchHero />} />
                    <Route path="hero/:id" element={<HeroDetails />} />

                </Routes>
            </div>
        </>
    )
}
