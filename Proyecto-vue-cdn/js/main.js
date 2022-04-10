console.warn(document.querySelector('title').textContent)

new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        valor: 123,
        valor2: 321,
        valor3: 654,
        contador: 123,
        contador2: 456,
        contador3: 789,
        mostrar: 0,
        mostrar2: true,
        usuarios: [
            'Pedro',
            'Juan',
            'Ana',
            'Laura'
        ],
        alumnos: [
            { nombre: 'Pedro', apellido: 'Mei', edad: 32, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png' },
            { nombre: 'Juan', apellido: 'Picos', edad: 24, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-128.png' },
            { nombre: 'Ana', apellido: 'Gomez', edad: 21, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-128.png' },
            { nombre: 'Laura', apellido: 'Lopez', edad: 27, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png' },
        ]

    },

    methods: {
        incrementar() {
            this.contador3++
        },
        getContador() {
            return this.contador3
        },
        actualizar(e) {// console.log('Actualizar',e)
            let valor = e.target.value
            this.valor2 = valor
        },
        incrementarMostrar() {
            this.mostrar++
            if (this.mostrar == 3) this.mostrar = 0
        },
        getValorMostrar() {
            return `mostrar fase: ${this.mostrar}`
        }
    },

    computed: {
        calcularAlumnosCurso() {
            let cant = 0
            this.alumnos.forEach(alumno => {
                if (alumno.curso) cant++
            })

            return {
                cantidad: cant,
                total: this.alumnos.length
            }
        }
    }
})