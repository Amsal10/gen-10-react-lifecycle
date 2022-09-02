import React from "react";

//Misal kita memiliki data API seperti berikut ini:
const dataApi = [
    {
        namaBarang: "gitar",
        hargaBarang: 2500000

    },
    {
        namaBarang: "bass",
        hargaBarang: 2000000

    },
    {
        namaBarang: "keyboard",
        hargaBarang: 5000000

    },
    {
        namaBarang: "drum",
        hargaBarang: 25000000

    },
    {
        namaBarang: "sexophone",
        hargaBarang: 30000000

    },
]

/*Data diatas dapat ditampilkan dalam WEB dengan
melakukan inisialsisasi state pada constructor
cycle
*/

class LifeCycleClass extends React.Component {
    constructor() {
        super();
        //Lakukan inisialisasi state
        this.state = {
            totalHarga: 0,
            dataAlat: [],
            isiKeranjang: []
        }
    }

    componentDidMount() {
        this.setState({dataAlat: dataApi})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isiKeranjang.length !== this.state.isiKeranjang.length) {
            let hargaTotal = 0;
            for (let daftarIsiKeranjang of this.state.isiKeranjang) {
                hargaTotal = hargaTotal + daftarIsiKeranjang.hargaBarang
            }
            this.setState({totalHarga:hargaTotal})
        }
    }

    tambahKeKeranjang(alatMusikYangDipilih) {
        const isiKeranjangSekarang = [...this.state.isiKeranjang];
        isiKeranjangSekarang.push(alatMusikYangDipilih);
        this.setState({isiKeranjang: isiKeranjangSekarang});
    }

    hapusDariDaftarKeranjang(alatMusikYangDipilih) {
        const isiKeranjangSekarang = [...this.state.isiKeranjang];
        isiKeranjangSekarang.splice(isiKeranjangSekarang.indexOf(alatMusikYangDipilih), 1);
        this.setState({isiKeranjang: isiKeranjangSekarang});
    }

    render() {
        return (
            <div>
                <p>Total Harga {this.state.totalHarga}</p>
                <h1>Daftar Barang</h1>
                <ul>
                    {this.state.dataAlat.map((namaAlatMusik) => (
                            <li>
                                {namaAlatMusik.namaBarang} | {namaAlatMusik.hargaBarang} | <button
                                onClick={() => this.tambahKeKeranjang(namaAlatMusik)}>Tambah Ke
                                Keranjang</button>

                            </li>
                        )
                    )
                    }
                </ul>
                <h1>Daftar Barang dalam Keranjang</h1>
                <ul>
                    {
                        this.state.isiKeranjang.map((daftarIsiKeranjang) =>
                            (
                                <li>
                                    {daftarIsiKeranjang.namaBarang} | {daftarIsiKeranjang.hargaBarang} | <button
                                    onClick={() => this.hapusDariDaftarKeranjang(daftarIsiKeranjang)}>
                                    Hapus
                                </button>
                                </li>
                            ))
                    }
                </ul>
            </div>
        )
    }
}

export default LifeCycleClass