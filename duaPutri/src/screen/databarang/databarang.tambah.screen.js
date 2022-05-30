import React from 'react';
import { Text, LogBox, TouchableOpacity, View, ToastAndroid } from 'react-native';
import TextInputCustom from '../../komponen/textInputCustomComponent';
import api from '../../konfig/api';
var qs = require('qs');

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const DataBarangTambahScreen = (props) => {

    const { callback } = props.route.params;

    const [form, setForm] = React.useState({
        kode_barang: "",
        nama_barang: "",
        stok: "",
        harga_beli: "",
        harga_jual: "",
        kode_suplier: "",
    });

    const onAdd = () => api
    .post('/produk/api_tambah.php', qs.stringify(form), {
       headers: { 
           'Content-Type': 'application/x-www-form-urlencoded'
       }
    })
    .then(({data}) => responseAddData(data))
    .catch((e) => console.log(e))

    const responseAddData = (data) => {
        switch (data?.response) {
            case 'SUCCESS':
                ToastAndroid.show('Success Add Produk', ToastAndroid.SHORT);
                callback();
                props.navigation.goBack();
                break;
            
            case 'ERROR':
                ToastAndroid.show(data?.message, ToastAndroid.SHORT);
                break;
        }
    }

    return (
        <View>
            <TextInputCustom 
                label='Kode Barang'
                placeholder='Masukan Kode Barang'
                value={form.kode_barang}
                onChangeText={(kode_barang) => setForm({...form, kode_barang})}
            />
            <TextInputCustom 
                label='Nama Barang'
                placeholder='Masukan Nama Barang'
                value={form.nama_barang}
                onChangeText={(nama_barang) => setForm({...form, nama_barang})}
            />
            <TextInputCustom 
                label='Kode Suplier'
                placeholder='Masukan Kode Suplier'
                value={form.kode_suplier}
                onChangeText={(kode_suplier) => setForm({...form, kode_suplier})}
            />
            <TextInputCustom 
                keyboardType='numeric'
                label='Stok'
                placeholder='Masukan Stok Barang'
                value={form.stok}
                onChangeText={(stok) => setForm({...form, stok})}
            />
            <TextInputCustom 
                keyboardType='numeric'
                label='Harga Beli'
                placeholder='Masukan Harga Beli'
                value={form.harga_beli}
                onChangeText={(harga_beli) => setForm({...form, harga_beli})}
            />
            <TextInputCustom 
                keyboardType='numeric'
                label='Harga Jual'
                placeholder='Masukan Harga Jual'
                value={form.harga_jual}
                onChangeText={(harga_jual) => setForm({...form, harga_jual})}
            />
    
            <TouchableOpacity style={{
                backgroundColor: 'tomato',
                borderRadius: 10,
                paddingVertical: 5,
                marginHorizontal: 10,
                marginTop: 30,
                alignItems: 'center',
            }} onPress={onAdd}>
                <Text style={{
                    color: 'white'
                }}>Tambah</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DataBarangTambahScreen;
