import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ItemComponent from '../../komponen/item.component';
import api from '../../konfig/api';
import { formatRupiah } from '../../konfig/rupiah';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


const TransaksiScreen = (props) => {

    const [transaksi, setTransaksi] = React.useState([]);

    React.useEffect(() => {
        api
            .get('/transaksi/api_tampil_all.php')
            .then(({ data }) => {
                setTransaksi(data);
            })
            .catch((e) => console.log(e))
    }, [props]);

    function dataList({ item }) {
        return (
            <View style={{
                padding: 10,
                marginHorizontal: 10,
                backgroundColor: 'white',
                marginVertical: 5,
                elevation: 2,
                borderRadius: 10,
            }}>
               <Text>{item.id}</Text>
               <ItemComponent 
                name="Nomor Nota"
                value={item.nota}
               />
               <ItemComponent 
                name="Tanggal"
                value={item.tanggal}
               />
               <ItemComponent 
                name="Kode Barang"
                value={item.kode_barang}
               />
               <ItemComponent 
                name="Qty"
                value={item.qty}
               />
               <ItemComponent 
                name="Harga"
                value={formatRupiah('0', 'Rp .')}
               />
               <ItemComponent 
                name="Tipe"
                value={item.tipe}
               />
            </View>
        );
    }

    const listBarang = () => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={transaksi}
                    renderItem={dataList}
                    keyExtractor={(_, i) => i.toString()}
                />
            </View>
        )
    }

    return (
        <View style={{
            backgroundColor: "#fff",
            flex: 1,
            borderColor: '#fff',
        }}>
            {listBarang()}
            <View style={{
                position : 'absolute',
                bottom: 10,
                right: 10,
            }}>
            <TouchableOpacity style={{
                backgroundColor: 'red',
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontSize: 15,
                    color: 'white',
                }}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
export default TransaksiScreen