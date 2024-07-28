import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import ChevronLeft from '~/assets/Icon/chevron-left';
import ClockIcon from '~/assets/Icon/clock';
import { Data } from '~/Data';

interface HeaderProps {
  data: Data;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <View style={styleHeader.layout}>
      <View style={styleHeader.container}>
        <View style={styleHeader.leftColumn}>
          <ChevronLeft width={15} height={13.17} style={styleHeader.icon} />
          <Text style={styleHeader.title}>{data.title}</Text>
        </View>
        <ClockIcon width={24} height={24} style={styleHeader.icon} />
      </View>
    </View>
  );
};


const styleHeader = StyleSheet.create({
  layout: {
    top: 13,
    height: 75,
    paddingBottom: 28,
    borderBottomColor: '#838EA01F',
    borderBottomWidth: 1,
  },
  container: {
    width: 395,
    height: 33,
    marginTop: 25,
    flexDirection: 'row',
    paddingRight: 15,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  leftColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#FFFFFF',
    fontFamily: 'Supreme Variable',
  },
  icon: {
    marginRight: 10,
    fontSize: 15,
    fontWeight: '200',
  },
});

export default Header;
