import React, {useRef, useMemo, useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ListItem from './components/ListItem'
import Chart from './components/Chart'
import { SAMPLE_DATA } from './assets/data/sampleData'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.header}>Markets</Text>
    </View>
    <View style={styles.divider}></View>
  </>
)

export default function App() {

  const [selectedCoinData, setSelectedCoinData] = useState(null) 

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectedCoinData(item)
    bottomSheetModalRef.current?.present();
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>

        <SafeAreaView style={styles.container}>

          <FlatList
            keyExtractor={(item) => item.id}
            data={SAMPLE_DATA}
            renderItem={({item}) => (
              <ListItem 
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentege7d={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
              onPress={() => openModal(item)}
              
              />
              
              )}
              
              ListHeaderComponent={<ListHeader />}
          />
        </SafeAreaView>


        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
          >
          
          { selectedCoinData ? (

            <Chart
            currentPrice={selectedCoinData.current_price}
            logoUrl={selectedCoinData.image}
            name={selectedCoinData.name}
            symbol={selectedCoinData.symbol}
            priceChangePercentege7d={selectedCoinData.price_change_percentage_7d_in_currency}
            sparkline={selectedCoinData.sparkline_in_7d.price}
            />
            
            ) : null
          }
        </BottomSheetModal>

      </BottomSheetModalProvider>
    </GestureHandlerRootView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleWrapper:{
    marginTop: 20,
    paddingHorizontal: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
