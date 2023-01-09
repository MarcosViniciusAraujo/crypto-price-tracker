import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
//import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';

export const {width: SIZE} = Dimensions.get('window');

const Chart = ({currentPrice, logoUrl, name, symbol, priceChangePercentege7d, sparkline}) => {

    const colorPercent = priceChangePercentege7d > 0 ? '#34C759' : '#FF3B30'
    
    return (
    
      <View style={styles.chartWrapper}>

        {/* Titulo boraa */}
        <View style={styles.titleWrapper}>  
          <View style={styles.upperTitles}>
            <View style={styles.upperLeftTitle}>
              <Image source={{uri: logoUrl}} style={styles.image} />
              <Text style={styles.subtitle}> {name} ({symbol.toUpperCase()})</Text>
            </View>
            <Text style={styles.subtitle}>7d</Text>

          </View>

          <View style={styles.lowerTitle}>
            <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
            <Text style={[styles.title, {color: colorPercent}]}>{priceChangePercentege7d.toFixed(3)}%</Text>
          </View>
        </View>


      </View>
  )
}

const styles = StyleSheet.create({
  chartWrapper: {
    margin: 16,

  },
  titleWrapper: {

  },
  upperTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,

  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1'
  },
  lowerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
  },
})


export default Chart