
    // Implementa la clase Queue
    // enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
    // dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow 
    //(cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
    // size:   Devuelve el número de elementos que contiene la queue.
    function Queue() {

        this.array = [];

        Queue.prototype.enqueue = function(elemento){
            return this.array.push(elemento)
        }
        Queue.prototype.dequeue = function(elemento){
            return this.array.shift(elemento)
        }
        Queue.prototype.size = function(elemento){
            return this.array.length(elemento)
        }
    }


    // Implementar la función cardGame: a partir de dos Queue que va a recibir como paráemtros tiene
    // que determinar quién será el ganador del juego de cartas. Las reglas de dicho juego son las siguientes:
    //    - Cada jugador tendrá un mazo con cartas numeradas del 1 al 12
    //    - Estos mazos estarán implementados a partir de la estructura de Queue.
    //    - En cada turno del juego, cada jugador lanzará la carta que se encuentre primero en su mazo (Queue)
    //    - El jugador que tenga el número más alto en el turno ganará dicho turno
    //    - El jugador que gane dicho turno se quedará con ambas cartas agregándolas al final del mazo (Primero
    //    la suya y luego la de su contrincante)
    //    - En el caso de que haya empate ambos pierden las cartas y no se agregan a ningún mazo
    //    - El ganador del juego será quien deje a su oponente sin cartas en su mazo
    // Aclaración: la función cardGame debe retornar "A wins!" en el caso de que el ganador sea el jugador A o
    // "B wins!" en caso contrario. [Puede ocurrir que haya empate, en dicho caso retornat "Game tie!"]
    // Ejemplo:
    //    - mazoUserA = [4,2,10,11]
    //    - mazoUserB = [6,9,10,3]
    //    Primer mano:
    //     A --> 4  vs  6 <-- B [6 > 4 entones gana la mano B y pone ambas cartas en su mazo, colocando primero la suya]
    //    - mazoUserA = [2,10,11]
    //    - mazoUserB = [6,9,10,3,6,4]

    function cardGame(mazoUserA,mazoUserB) {

        for(var i=0;i<mazoUserA.length;i++){
            for(var j=0;j<mazoUserB.length;j++){
                if(mazoUserA[i]>mazoUserB[j]){
                    mazoUserA.push(mazoUserA[i],mazoUserB[j])
                }else{
                    mazoUserB.push(mazoUserB[j], mazoUserA[i])
                }
            }
        }

        if(mazoUserA.length===mazoUserB,length){
            return "Game tie!"
        }
        if(mazoUserA.length===0){
            return "B wins"
        }
        if(mazoUserB.length===0){
            return "A wins"
        }

    }


    // Implementa el metodo sets    
    // Usar el objeto set para obtener la cantidad de elementos iguales en dos arreglos
    // Muestra la cantidad
    // Aqui tu codigo

    function sets(arreglo1,arreglo2) {

        var conjunto1= new Set(arreglo1)
        var conjunto2= new Set(arreglo2)

        var interseccion = new Set([...conjunto1]).filter(e=>conjunto2.has(e))
        return interseccion.size()
    }

    console.log(sets([1,2,3,4],[0,3,2,6]))

