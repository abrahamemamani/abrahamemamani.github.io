import React from 'react';
import './Formation.scss';
import '../timeline/Timeline.scss';

const Formation = () => (
	<section className="my-formation space-section">
		<div className="container">
			<h2 className="app-title">Mi formación</h2>
			<div className="g-col-2">
				<div className="my-formation__exp-wrapper">
					<ul className="m-timeline">
						<li className="m-timeline__item">
							<h4 className="m-timeline__sub-title">Experiencia laboral</h4>
							<h3 className="m-timeline__title">
								SD Technology (Desarrollador Frontend)
								<span className="m-timeline__date">2018 (Feb - Jul)</span>
							</h3>
							<div>
								<b>Funciones:</b>
								<ul className="m-timeline__list">
									<li className="m-timeline__list-item">
										Actualizar y rediseñar sitios web (con diseños a seguir).
									</li>
									<li className="m-timeline__list-item">
										Desarrollar componentes (en JavaScript) para la interacción con el usuario.
									</li>
									<li className="m-timeline__list-item">
										Adaptar el sistema a una nueva base de datos en PHP.
									</li>
								</ul>
								<p>
									<b>Logros obtenidos: </b>
									Mejoras notables en el uso y comprensión de JavaScript, jQuery y Sass.
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div className="my-formation__edu-wrapper">
					<ul className="m-timeline">
						<li className="m-timeline__item">
							<h4 className="m-timeline__sub-title">Universidad (UTN)</h4>
							<h3 className="m-timeline__title">
								Técnico Superior en Programación
								<span className="m-timeline__date">2014 (Ene) - 2016 (Dic)</span>
							</h3>
							<ul className="m-timeline__list">
								<li className="m-timeline__list-item">
									Programación orientada a objetos.
								</li>
								<li className="m-timeline__list-item">
									Diseño y análisis de bases de datos relacionales.
								</li>
								<li className="m-timeline__list-item">
									ASP.NET, Assembler, C++, C#, SQL Server.
								</li>
							</ul>
						</li>
						<li className="m-timeline__item">
							<h4 className="m-timeline__sub-title">Extra</h4>
							<h3 className="m-timeline__title">
								Cursos (online y presenciales)
								<span className="m-timeline__date">2017 - 2019</span>
							</h3>
							<div>
								<ul className="m-timeline__list">
									<li className="m-timeline__list-item">
										<b>Introducción a la programación en JavaScript</b>
										<span className="m-timeline__list-data">15 horas | EducaciónIT</span>
									</li>
									<li className="m-timeline__list-item">
										<b>Programación Web en PHP y MySQL</b>
										<span className="m-timeline__list-data">40 horas | EducaciónIT</span>
									</li>
									<li className="m-timeline__list-item">
										<b>PHP - Programación Orientada a Objetos</b>
										<span className="m-timeline__list-data">12 horas | EducaciónIT</span>
									</li>
									<li className="m-timeline__list-item">
										<b>jQuery para Diseñadores</b>
										<span className="m-timeline__list-data">15 horas | EducaciónIT</span>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default Formation;