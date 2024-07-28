export interface Balance {
    price: number;
    unit: string;
  }
  
  export interface PriceByTime {
    high: number;
    volCoin: number;
    low: number;
    volUsd: number;
  }
  
  export interface Data {
    title: string;
    price: number;
    buyPrice: number;
    profit: number;
    balance: Balance;
    priceByTime: PriceByTime;
  }
  
  export interface Tab {
    name: string;
    id: number;
  }
  
  // Example usage
  export const data: Data = {
    title: "AVAXUSD",
    price: 28.67,
    buyPrice: 28.67,
    profit: 3.42,
    balance: {
      price: 1000.73,
      unit: 'USD',
    },
    priceByTime: {
      high: 28.88,
      volCoin: 1.78,
      low: 27.86,
      volUsd: 48.51,
    },
  }
  
  export const tabs: Tab[] = [
    {
      name: 'Limit',
      id: 1,
    },
    {
      name: 'Market',
      id: 2,
    },
    {
      name: 'Stop Limit',
      id: 3,
    },
  ]
  

  export const SchemaForm = [
    {
      label : 'Order Type',
      value : 'Limit',
      formName : 'order_type',
      type : 'text',
      required : true,
      id : 1
    },
    {
      label : 'Qty',
      value : '10',
      formName : 'qty',
      type : 'number',
      required : true,
      id : 2
    },
    {
      label : 'Stop Profit',
      value : null,
      formName : 'stop_profit',
      type : 'number',
      required : false,
      id : 3
    },
    {
      label : 'Stop Loss',
      value : false,
      formName : 'stop_loss',
      type : 'number',
      required : false,
      id : 4
    },
    {
      label : 'Price',
      value : null,
      formName : 'price',
      type : 'number',
      required : true,
      id : 5
    }
  ]