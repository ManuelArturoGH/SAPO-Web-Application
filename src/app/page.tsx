import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <div className="text-center">
          {/* Hero Section */}
          <section className="py-5 my-5">
              <h1 className="display-4 fw-bold">Bienvenido a SAPO</h1>
              <p className="lead text-muted">
                  Sistema de Asistencia Profesional y Organizativo.
              </p>

          </section>

          {/* Features Section */}
          <section className="container my-5">
              <div className="row g-4">
                  <div className="col-md-6">
                      <div className="card shadow-sm border-0 h-100">
                          <div className="card-body">
                              <h5 className="card-title fw-bold">Empleados</h5>
                              <p className="card-text text-muted">
                                  Administra y visualiza la información de todos tus usuarios en
                                  un solo lugar.
                              </p>
                              <Link href="/empleados" className="btn btn-dark">
                                  Ir a Empleados
                              </Link>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-6">
                      <div className="card shadow-sm border-0 h-100">
                          <div className="card-body">
                              <h5 className="card-title fw-bold">Asistencia</h5>
                              <p className="card-text text-muted">
                                  Consulta y registra la asistencia de forma clara y organizada.
                              </p>
                              <Link href="/attendance" className="btn btn-dark">
                                  Ver Asistencia
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
}
