import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ItemComponent from '../../komponen/item.component';
import api from '../../konfig/api';

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
const SuplierScreen = (props) => {

    const [users, setSuplier] = React.useState([]);

    React.useEffect(() => {
        api
            .get('/suplier/api_tampil_all.php')
            .then(({ 
                data
            }) => {
                console.log(data);
                setSuplier(data);
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
                name="Kode Suplier"
                value={item.kode_suplier}
               />
               <ItemComponent 
                name="Nama Suplier"
                value={item.nama_suplier}
               />
               <ItemComponent 
                name="No Telepon"
                value={item.no_tlp}
               />
               <ItemComponent 
                name="Alamat"
                value={item.alamat}
               />
            </View>

        );
    }

    const listSuplier = () => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={users}
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
            {listSuplier()}
            <View style={{
                position: 'absolute',
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
export default SuplierScreen