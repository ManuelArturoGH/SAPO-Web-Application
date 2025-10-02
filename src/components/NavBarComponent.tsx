"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarComponent() {
    const pathname = usePathname();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid">
                {/* Marca / Logo */}
                <Link className="navbar-brand fw-bold" href="/">
                    SAPO
                </Link>

                {/* Botón para colapsar en móvil */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                href="/"
                                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                            >
                                Pagina Principal
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/empleados"
                                className={`nav-link ${
                                    pathname === "/empleados" ? "active" : ""
                                }`}
                            >
                                Empleados
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/attendance"
                                className={`nav-link ${
                                    pathname === "/attendance" ? "active" : ""
                                }`}
                            >
                                Asistencia
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}