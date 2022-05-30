import React from 'react';
import { Text, LogBox, TouchableOpacity, View, ToastAndroid } from 'react-native';
import TextInputCustom from '../../komponen/textInputCustomComponent';
import api from '../../konfig/api';
var qs = require('qs');

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const SuplierTambahScreen = (props) => {

    const { callback } = props.route.params;

    const [form, setForm] = React.useState({
        kode_suplier: "",
        nama_suplier: "",
        no_tlp: "",
        alamat: "",
    });

    const onAdd = () => api
    .post('/suplier/api_tambah.php', qs.stringify(form), {
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
                label='Nama Suplier'
                placeholder='Masukan Nama Suplier'
                value={form.nama_suplier}
                onChangeText={(nama_suplier) => setForm({...form, nama_suplier})}
            />
            <TextInputCustom 
                keyboardType='numeric'
                label='No Telepon'
                placeholder='Masukan No Telepon'
                value={form.no_tlp}
                onChangeText={(no_tlp) => setForm({...form, no_tlp})}
            />
            <TextInputCustom 
                label='Alamat'
                placeholder='Masukan Alamat'
                value={form.alamat}
                onChangeText={(alamat) => setForm({...form, alamat})}
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

export default SuplierTambahScreen;
