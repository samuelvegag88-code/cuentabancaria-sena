class CuentaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.historial = [];

        
        if (saldoInicial > 0) {
            this.historial.push(`apertura de cuenta con saldo inicial de $${saldoInicial}`);
        }
    }

    consultarSaldo() {
        console.log(`el saldo actual de ${this.titular} es: $${this.saldo}`);
        return this.saldo;
    }
    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            this.historial.push(`deposito de $${monto}`);
            console.log(`deposita $${monto}.nNuevo saldo: $${this.saldo}`);
        } else {
            console.log("el monto a depositar debe ser mayor que 0.");
        }
    }


    retirar(monto) {
        if (monto <= 0) {
            console.log("el monto a retirar debe ser mayor que 0.");
        } else if (monto > this.saldo) {
            console.log(`no se puede retirar $${monto}. Saldo insuficiente (saldo actual: $${this.saldo}).`);
        } else {
            this.saldo -= monto;
            this.historial.push(`retiro de $${monto}`);
            console.log(`has retirado $${monto}. nuevo saldo: $${this.saldo}`);
        }
    }


    verHistorial() {
        console.log(`historial de movimientos de ${this.titular} `);
        if (this.historial.length === 0) {
            console.log("no hay movimientos ");
        } else {
            for (let movimiento of this.historial) {
                console.log(`- ${this.titular} ${movimiento}`);
            }
        }
    }
}


const cuentaMauricio = new CuentaBancaria("mauricio valencia", 5000);

cuentaMauricio.consultarSaldo();
cuentaMauricio.depositar(2000);
cuentaMauricio.retirar(10000); 
cuentaMauricio.retirar(3000);
cuentaMauricio.verHistorial();

