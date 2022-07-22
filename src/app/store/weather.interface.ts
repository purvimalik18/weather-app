
export interface weather {
  coord:{
    lon: DoubleRange;
    lat:DoubleRange;
  },
  weather:[
    {
      id:number;
      main:string;
      description:string;
      icon:string;
    }],
    base:string;
    main:{
      temp:DoubleRange;
      feels_like:DoubleRange;
      temp_min:DoubleRange;
      temp_max:DoubleRange;
      pressure:number;
      humidity:number
    },
    visibility:number;
    wind:{
      speed:DoubleRange;
      deg:number
    },
    clouds:{
      all:number
    },
    dt:number;
    sys:{
      type:number,
      id:number;
      country:string;
      sunrise:number,
      sunset:number
    },
    timezone:number,
    id:number,
    name:string;
    cod:number
  }
  