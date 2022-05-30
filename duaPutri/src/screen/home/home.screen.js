import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DatabarangScreen from '../databarang/databarang.screen';
import SuplierScreen from '../suplier/suplier.screen';
import DatalaporantransaksiScreen from '../datalaporantransaksi/datalaporantransaksi.screen';
import TransaksiScreen from '../transaksi/transaksi.screen';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { asGetUsername } from '../../konfig/storage';
const Tab = createBottomTabNavigator();

const Homescreen = (props) => {

    const [username, setUsername] = React.useState('');

    React.useEffect(() => {
        getUsername();
    }, [props])

    const getUsername = async () => {
        try {
            const { data, response } = await asGetUsername();
            console.log(data);
            if (response == 'success') setUsername(data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <StatusBar
                barStyle='light-content'
                backgroundColor={'#0d2821'}
            />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'black',
                })}
            >
                <Tab.Screen name="databarang" component={DatabarangScreen}
                    options={{
                        headerTitle: 'Data Barang',
                        title: 'Data Barang',
                        headerStyle: {
                            backgroundColor: '#0d2821',
                        }, headerTitleStyle: {
                            color: '#fff'
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <MaterialCommunityIcons
                                name="bookshelf"
                                size={focused ? size : size - 5}
                                color={color}
                            />
                        }
                    }}

                />
                <Tab.Screen name="suplier" component={SuplierScreen}
                    options={{
                        headerTitle: 'Data Suplier',
                        title: 'Suplier ',
                        headerStyle: {
                            backgroundColor: '#0d2821',
                        }, headerTitleStyle: {
                            color: '#fff'
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <MaterialIcons
                                name="people"
                                size={focused ? size : size - 5}
                                color={color}
                            />
                        }
                    }}
                />
                {
                    username != "admin" ? (
                        <Tab.Screen name="datalaporantransaksi" component={DatalaporantransaksiScreen}
                            options={{
                                headerTitle: 'Laporan Transaksi',
                                title: `Laporan Transaksi`,
                                headerStyle: {
                                    backgroundColor: '#0d2821',
                                }, headerTitleStyle: {
                                    color: '#fff'
                                }, tabBarIcon: ({ focused, color, size }) => {
                                    return <MaterialIcons
                                        name="print"
                                        size={focused ? size : size - 5}
                                        color={color}
                                    />
                                },
                            }}
                        />
                    ) : null
                }
                <Tab.Screen name="transaksi" component={TransaksiScreen}
                    options={{
                        headerTitle: 'Transaksi',
                        title: 'Transaksi',
                        headerStyle: {
                            backgroundColor: '#0d2821',
                        }, headerTitleStyle: {
                            color: '#fff'
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <MaterialIcons
                                name="money"
                                size={focused ? size : size - 5}
                                color={color}
                            />
                        }
                    }}
                />
            </Tab.Navigator>
        </>
    )
}




export default Homescreen;
