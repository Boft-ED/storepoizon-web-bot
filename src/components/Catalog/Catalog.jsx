import React from "react";
import './Catalog.scss'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Catalog = () => {
    const { list } = useSelector(({ categories }) => categories)

    console.log('list', list);

    return (
        <section className="catalog">
            <h1>catalog</h1>

            <ul className="catalog__list">
                {list.map(({ id, name }) => (
                    <li key={id}>
                        <NavLink
                            className={({ isActive }) => `${isActive ? "active" : ""}`}
                            to={`/categories/${id}`}>{name}</NavLink>
                    </li>
                ))}
            </ul>
        </section>

    );
};

export default Catalog;