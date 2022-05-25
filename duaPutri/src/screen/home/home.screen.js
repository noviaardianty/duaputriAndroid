import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DatabarangScreen from '../databarang/databarang.screen';
import SuplierScreen from '../suplier/suplier.screen';
import DatalaporantransaksiScreen from '../datalaporantransaksi/datalaporantransaksi.screen';
import TransaksiScreen from '../transaksi/transaksi.screen';

const Tab = createBottomTabNavigator();

const Homescreen = () => (
    <Tab.Navigator>
        <Tab.Screen name="databarang" component={DatabarangScreen}

            options={{
                headerTitle: 'Data Barang',
                title: 'Data Barang',
                headerStyle: {
                    backgroundColor: '#0d2821',
                }, headerTitleStyle: {
                    color: '#fff'
                }

            }} />
        <Tab.Screen name="suplier" component={SuplierScreen}
            options={{
                headerTitle: 'Data Suplier',
                title: 'Suplier ',
                headerStyle: {
                    backgroundColor: '#0d2821',
                }, headerTitleStyle: {
                    color: '#fff'
                }

            }}
        />
        <Tab.Screen name="datalaporantransaksi" component={DatalaporantransaksiScreen}
            options={{
                headerTitle: 'Laporan Transaksi',
                title: 'Laporan Transaksi',
                headerStyle: {
                    backgroundColor: '#0d2821',
                }, headerTitleStyle: {
                    color: '#fff'
                }
            }}
            />
        <Tab.Screen name="transaksi" component={TransaksiScreen}
            options={{
                headerTitle: 'Transaksi',
                title: 'Transaksi',
                headerStyle: {
                    backgroundColor: '#0d2821',
                }, headerTitleStyle: {
                    color: '#fff'
                }
            }}
        />
    </Tab.Navigator>
)




export default Homescreen;
