import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
const DatalaporantransaksiScreen = (props) => {

    const [data, setDatatransaksi] = React.useState([]);

    React.useEffect(() => {
        api
            .get('/laporan_transaksi/api_tampil_all.php')
            .then(({ data }) => {
                setDatatransaksi(data);
                // console.log(data);
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
               {/* <Text>{item.}</Text> */}
               <ItemComponent
                flexA={1}
                name="Kode Barang"
                value={item.kode_barang}
               />
               <ItemComponent
                flexA={1}
                name="Tanggal"
                value={item.tanggal}
               />
               <ItemComponent 
                flexA={1}
                name="Jumlah Barang Masuk"
                value={item.jumlah_masuk}
               />
               <ItemComponent
                flexA={1}
                name="Jumlah Barang Keluar"
                value={item.jumlah_keluar}
               />
               <ItemComponent
                flexA={1}
                name="Keuntungan"
                value={formatRupiah(item.keuntungan != null ? item.keuntungan : '0', 'Rp .')}
               />
            </View>
        );
    }

    

    const penjualanBarang = () => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
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
            {penjualanBarang()}
        </View>
    );
}
export default DatalaporantransaksiScreen