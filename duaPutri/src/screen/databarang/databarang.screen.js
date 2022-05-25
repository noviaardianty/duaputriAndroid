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


const DatabarangScreen = (props) => {

    const [produk, setProduk] = React.useState([]);

    React.useEffect(() => {
        api
            .get('/produk/api_tampil_all.php')
            .then(({ data }) => {
                setProduk(data);
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
                name="Kode Barang"
                value={item.kode_barang}
               />
               <ItemComponent 
                name="Nama Barang"
                value={item.nama_barang}
               />
               <ItemComponent 
                name="Kode Suplier"
                value={item.kode_suplier}
               />
               <ItemComponent 
                name="Stok"
                value={item.stok}
               />
               <ItemComponent 
                name="Harga Beli"
                value={formatRupiah(item.harga_beli, 'Rp .')}
               />
               <ItemComponent 
                name="Harga Jual"
                value={formatRupiah (item.harga_jual, 'Rp .')}
               />
            </View>
        );
    }

    const listBarang = () => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={produk}
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
export default DatabarangScreen