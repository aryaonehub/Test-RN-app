import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avax from '~/assets/Icon/avax';

const PriceInfo = ({ data }) => {
  return (
    <View style={styles.layout}>
      <View style={styles.coinInfoContainer}>
        <View style={styles.coinIcon}>
          <Avax width={18.95} height={18.95} style={{ top: 5.53, left: 5.53 }} />
        </View>
        <Text style={{ ...styles.mainPrice, ...styles.fontInter }}>
          {data.price}
        </Text>
        <View style={styles.coinPriceContainer}>
          <Text style={{ ...styles.PriceText, ...styles.fontInter, ...styles.buyText }}>
            ~${data.buyPrice}
          </Text>
          <Text style={{ ...styles.PriceText, ...styles.fontInter, ...styles.profitText }}>
            +{data.profit}%
          </Text>
        </View>
      </View>
      <View style={styles.infoCoinContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={{ ...styles.fontInter, ...styles.labelInfo }}>24h High</Text>
            <Text style={{ ...styles.fontInter, ...styles.valueLabel }}>{data.priceByTime.high}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{ ...styles.fontInter, ...styles.labelInfo }}>24h Vol(AVAX)</Text>
            <Text style={{ ...styles.fontInter, ...styles.valueLabel }}>{data.priceByTime.volCoin}</Text>
          </View>
        </View>
        <View style={{ ...styles.row, top: 25 }}>
          <View style={styles.column}>
            <Text style={{ ...styles.fontInter, ...styles.labelInfo }}>24h Low</Text>
            <Text style={{ ...styles.fontInter, ...styles.valueLabel }}>{data.priceByTime.low}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{ ...styles.fontInter, ...styles.labelInfo }}>24h Vol(USD)</Text>
            <Text style={{ ...styles.fontInter, ...styles.valueLabel }}>{data.priceByTime.volUsd}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PriceInfo;

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: 95,
    gap: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coinInfoContainer: {
    width: 159,
    height: 95,
    gap: 8,
  },
  coinIcon: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#D9D9D917',
  },
  fontInter: {
    fontFamily: 'Inter',
  },
  mainPrice: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#FFFFFF',
    width: 90,
    height: 31,
  },
  coinPriceContainer: {
    width: 159,
    height: 18,
    gap: 8,
    top: 5,
    flexDirection: 'row',
  },
  buyText: {
    color: '#8E92AA',
  },
  profitText: {
    color: '#19D98E',
  },
  PriceText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.4,
    textAlign: 'left',
  },
  infoCoinContainer: {
    width: 180,
    height: 122,
    paddingBottom: 28,
  },
  labelInfo: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#8E92AA',
  },
  valueLabel: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    rowGap: 24,
  },
  column: {
    width: '50%',
    marginBottom: 10,
  },
});
