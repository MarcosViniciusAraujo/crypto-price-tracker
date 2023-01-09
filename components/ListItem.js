import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({name, symbol, currentPrice, priceChangePercentege7d, logoUrl, onPress}) => {

    const colorPercent = priceChangePercentege7d > 0 ? '#34C759' : '#FF3B30'

    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.itemWrapper}>

            {/* Esquerda  */}
            <View style={styles.leftWrapper}>
                <Image source={{uri: logoUrl}} style={styles.image}/>
                <View style={styles.titleWrapper}> 
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                </View>
            
            </View>


            {/* Direita  */}
            <View style={styles.rightWrapper}>
                <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                <Text style={[styles.subtitle, {color: colorPercent}]}>{priceChangePercentege7d.toFixed(3)}%</Text>
            </View>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    image: {
        height: 48,
        width: 48, 
    }, 
    titleWrapper: {
        marginLeft: 8,

    }, 
    rightWrapper: {
        alignItems: 'flex-end'
    }, 
    title: {
        fontSize: 18,

    }, 
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#A9ABB1'
    }, 

})
export default ListItem