import '../../styles/styles.css';

import React, {
  useEffect,
  useState,
} from 'react';

const ciudadesMexico = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
    "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit",
    "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
    "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

const tinas = [
    "ATENAS I", "ATENAS II", "ATENAS III", "BOLONIA I", "BOLONIA II", "BRESCIA", "CALE",
    "CANNES", "CAPRI", "CARRARA", "CISILIA", "FERRARA", "GRANADA", "HERMES", "MODENA",
    "MONACO", "MONTECARLO", "NAPOLES", "NIZA", "NORMANDIA", "PADUA I", "PADUA II",
    "PADUA II S/F", "PALERMO", "PALERMO FREE", "ROMANA", "SIENA", "TOSCANA", "TOLEDO",
    "TURIN", "UJU", "VENECIA", "VERONA"
];

// Definimos el Icono fuera del componente principal para evitar errores de renderizado
const ArrowIcon = ({ isOpen }) => (
    <svg
        className={`arrow-svg ${isOpen ? 'open' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        style={{
            width: '14.005px',
            height: '8.002px',
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
    >
        <path
            d="M7.70859 7.70859C7.31797 8.09922 6.68359 8.09922 6.29297 7.70859L0.292969 1.70859C-0.0976562 1.31797 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31797 -0.0976562 1.70859 0.292969L7.00234 5.58672L12.2961 0.296093C12.6867 -0.0945315 13.3211 -0.0945315 13.7117 0.296093C14.1023 0.686718 14.1023 1.32109 13.7117 1.71172L7.71172 7.71172L7.70859 7.70859Z"
            fill="white"
        />
    </svg>
);

export default function Contactanos() {
    const [ciudad, setCiudad] = useState("");
    const [tina, setTina] = useState("");
    const [openSelect, setOpenSelect] = useState(null);

    useEffect(() => {
        const closeAll = () => setOpenSelect(null);
        window.addEventListener("click", closeAll);
        return () => window.removeEventListener("click", closeAll);
    }, []);

    const toggleDropdown = (e, type) => {
        e.stopPropagation();
        setOpenSelect(openSelect === type ? null : type);
    };

    const handleOptionClick = (type, value) => {
        if (type === 'ciudad') setCiudad(value);
        if (type === 'tina') setTina(value);
        setOpenSelect(null);
    };

    return (
        <section className="contact-section">
            <h2 className="contact-title">Contáctanos</h2>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                    <div className="form-field"><input type="text" placeholder="Nombre(s)" /></div>
                    <div className="form-field"><input type="text" placeholder="Apellido(s)" /></div>
                </div>

                <div className="form-row">
                    <div className="form-field"><input type="email" placeholder="Correo electrónico" /></div>
                    <div className="form-field"><input type="tel" placeholder="Teléfono" /></div>
                </div>

                <div className="form-row">
                    {/* SELECT CIUDAD */}
                    <div className="form-field custom-select">
                        <div className="select-trigger" onClick={(e) => toggleDropdown(e, 'ciudad')}>
                            <span>{ciudad || "Ciudad"}</span>
                            <ArrowIcon isOpen={openSelect === 'ciudad'} />
                        </div>
                        {openSelect === 'ciudad' && (
                            <ul className="select-dropdown">
                                {ciudadesMexico.map((item) => (
                                    <li key={item} onClick={() => handleOptionClick('ciudad', item)}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* SELECT TINA */}
                    <div className="form-field custom-select">
                        <div className="select-trigger" onClick={(e) => toggleDropdown(e, 'tina')}>
                            <span>{tina || "Selecciona la tina de tu interés"}</span>
                            <ArrowIcon isOpen={openSelect === 'tina'} />
                        </div>
                        {openSelect === 'tina' && (
                            <ul className="select-dropdown">
                                {tinas.map((item) => (
                                    <li key={item} onClick={() => handleOptionClick('tina', item)}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field"><input type="text" placeholder="Cuéntanos más sobre tu proyecto" /></div>
                    <div className="form-field"><input type="text" placeholder="Déjanos tu duda aquí" /></div>
                </div>

                <button className="navbar-cta">
                    Contáctanos ahora
                </button>
            </form>
        </section>
    );
}