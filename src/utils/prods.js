const prods = [
    {
        id: 1,
        title: nop,
        description: 'Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas. Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero. Velocidad en cada lectura. Como cuenta con 896 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU. Calidad de imagen        Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.',
        img: "https://http2.mlstatic.com/D_NQ_NP_812482-MLA42349749232_062020-O.webp",
        category: "GPU",
        price: "70000",
        stock: "100"
    },
    {
        id: 2,
        title: "Nvidia MSI Ventus GeForce RTX 3060 Ti",
        description: 'Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas. Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero. Velocidad en cada lectura. Como cuenta con 896 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU. Calidad de imagen        Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.',
        img: "https://http2.mlstatic.com/D_NQ_NP_738876-MLA48688406522_122021-O.webp",
        category: "GPU",
        price: "196000",
        stock: "100"
    },
    {
        id: 3,
        title: "Nvidia MSI Ventus GeForce RTX 2060",
        description: 'Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas. Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero. Velocidad en cada lectura. Como cuenta con 896 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU. Calidad de imagen        Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.',
        img: "https://http2.mlstatic.com/D_NQ_NP_798345-MLA52148640021_102022-O.webp",
        category: "GPU",
        price: "96000",
        stock: "100"
    },
    {
        id: 4,
        title: "AMD Ryzen 7 5700G",
        description: 'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más. Núcleos: el corazón del procesador. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto. Máxima potencia. Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        img: "https://http2.mlstatic.com/D_NQ_NP_940934-MLU47593217192_092021-O.webp",
        category: "Procesadores",
        price: "72000",
        stock: "100"
    },
    {
        id: 5,
        title: "AMD Athlon 3000G",
        description: 'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más. Núcleos: el corazón del procesador. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto. Máxima potencia. Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        img: "https://http2.mlstatic.com/D_NQ_NP_620009-MLA41419343230_042020-O.webp",
        category: "Procesadores",
        price: "28000",
        stock: "100"
    },
    {
        id: 6,
        title: "AMD Ryzen 5 3600",
        description: 'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más. Núcleos: el corazón del procesador. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto. Máxima potencia. Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        img: "https://http2.mlstatic.com/D_NQ_NP_717692-MLA40182401049_122019-O.webp",
        category: "Procesadores",
        price: "28000",
        stock: "100"
    },
    {
        id: 7,
        title: "AMD Ryzen 5 PRO 4650G",
        description: 'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más. Núcleos: el corazón del procesador. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto. Máxima potencia. Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        img: "https://http2.mlstatic.com/D_NQ_NP_892004-MLA46391057170_062021-O.webp",
        category: "Procesadores",
        price: "44000",
        stock: "100"
    },
    {
        id: 8,
        title: "Asus Prime A320m-k",
        description: "Construida para Durar. ASUS es la marca líder en tarjetas madre del mundo, renombrada por sus diseños únicos. Nuestras pruebas exhaustivas sobrepasan el estándar de la industria, respaldados por componentes de alta calidad para una protección excepcional en situaciones reales. Nuestras tarjetas madre están probadas para ser compatibles con más de 1,000 componentes y dispositivos, y cada nuevo modelo atraviesa por un mínimo de 8,000 horas de estrictas validaciones. ASUS te ofrece la seguridad de saber que tu tarjeta madre está lista para todo tipo de ambientes y aplicaciones. Al escoger ASUS, también escoges la libertad de seleccionar componentes para tener una experiencia de PC DIY sin problemas!",
        img: "https://http2.mlstatic.com/D_NQ_NP_751760-MLA31065397561_062019-O.webp",
        category: "Motherboards",
        price: "13000",
        stock: "100"
    },
    {
        id: 9,
        title: "Asus Prime B460m-a",
        description: 'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más. Núcleos: el corazón del procesador. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto. Máxima potencia. Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        img: "https://http2.mlstatic.com/D_NQ_NP_799372-MLA48026435344_102021-O.webp",
        category: "Motherboards",
        price: "19000",
        stock: "100"
    },
    {
        id: 10,
        title: "Asus Prime H510m-e",
        description: 'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más. Núcleos: el corazón del procesador. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto. Máxima potencia. Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',
        img: "https://http2.mlstatic.com/D_NQ_NP_672250-MLA48003407067_102021-O.webp",
        category: "Motherboards",
        price: "20000",
        stock: "100"
    }
]

export default prods
