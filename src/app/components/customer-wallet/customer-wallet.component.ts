import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-wallet',
  templateUrl: './customer-wallet.component.html',
  styleUrls: ['./customer-wallet.component.scss']
})
export class CustomerWalletComponent implements OnInit {
  expandedindex: any = null;

  // paymentss: Array<any> = [
  //   {
  //     amCost: 249,
  //     amSale: 299,
  //     amSave: 50,
  //     amTotal: 249,
  //     by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //     camp: {
  //       ban: false,
  //       by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //       cbDir: 25,
  //       cbExi: 50,
  //       cbNew: 100,
  //       countM: 0,
  //       countP: 0,
  //       countS: 0,
  //       customAct: false,
  //       customPay: 0,
  //       dateE: { seconds: 1660329000, nanoseconds: 0 },
  //       dateS: { seconds: 1657650600, nanoseconds: 0 },
  //       expiry: false,
  //       id: "ZPkNWVk1trHm3b8GBr4F",
  //       max: 0,
  //       min: 999,
  //       name: "Campaign-12",
  //       paid: false,
  //       paused: false,
  //       sid: "8B9ozj7aTPvywkIvVWiK",
  //       sin: { seconds: 1657693001, nanoseconds: 480000000 },
  //       stage: 0,
  //       stoped: false,
  //       storeTyp: "Both",
  //       tX: "t1",
  //       type: "flat",
  //       upd: { seconds: 1657693001, nanoseconds: 480000000 },
  //     },
  //     cart: [{
  //       banners: ["https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fh25O95gX19QwOYWqprXx1656595042885?alt=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb"],
  //       burn: false,
  //       by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //       category: "Dal",
  //       code: "21069099",
  //       content: true,
  //       cost: 249,
  //       description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
  //       id: "h25O95gX19QwOYWqprXx",
  //       price: 299,
  //       quota: 0,
  //       reqBurn: false,
  //       sid: "8B9ozj7aTPvywkIvVWiK",
  //       sin: { seconds: 1656594533, nanoseconds: 801000000 },
  //       sold: 0,
  //       title: "Dal Tadka ",
  //       upd: { seconds: 1656595043, nanoseconds: 979000000 },
  //       vX: [],
  //       variants: [],
  //       warranty: true,
  //     }],
  //     code: null,
  //     com: { seconds: 1658374107, nanoseconds: 89000000 },
  //     earn: 0,
  //     id: "Qeqe3OMRinwZktUpQMwm",
  //     invoice: { useRefrCash: false, amtRefrCash: 0, COD: true },
  //     journey: "DIRECT",
  //     logistics: {
  //       addressDrop: {
  //         address: "129 Master Ali, Murdha Village, Thane",
  //         landmark: "Near Market",
  //         type: "home",
  //         zip: "401101",
  //       },
  //       addressDropT: "home",
  //       addressPick: {
  //         area: "Dent Heal",
  //         city: "Mumbai Suburban",
  //         id: "IND_MH_1648672299398",
  //         lat: 19.0662066,
  //         line1: "Dipesadsadas sadasdas",
  //         line2: "",
  //         locality: "Mumbai",
  //         lon: 72.83105909999999,
  //         nation: "IND",
  //         region: "Maharashtra",
  //         state: "MH",
  //         zip: "400050",
  //       },
  //       addressPickT: "shop",
  //       email: "dipesious@gmail.com",
  //       name: "Dipeshin",
  //       phone: "9876543210",
  //       require: true,
  //       status: 0,
  //       typeCat: "food_and_beverages",
  //       typeOrdr: "DIRECT_ONLINE",
  //       typeShop: "Both",
  //       typeSuCat: "sc-food_and_beverages-restaurants",
  //     },
  //     ordrTYPE: "COD",
  //     refr: null,
  //     sid: "8B9ozj7aTPvywkIvVWiK",
  //     sin: { seconds: 1658367303, nanoseconds: 379000000 },
  //     status: 0,
  //     storeName: "Fit Foods",
  //     to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",

  //     type: [
  //       "COD",
  //       "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //       "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //       "8B9ozj7aTPvywkIvVWiK",
  //       "addORDER",
  //       "storeORDER",
  //       "clientAc",
  //       "DIRECT",
  //     ],
  //     upd: { seconds: 1658367303, nanoseconds: 379000000 },
  //     userName: "Dipeshin"
  //   },
  //   // burn order
  //   {
  //     amCost: 900,
  //     amSale: 1000,
  //     amSave: 100,
  //     amTotal: 900,
  //     by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //     camp: null,
  //     cart: [{
  //       banners: ["https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1648679682383?alt=media&token=93ee264a-8086-4ec4-adf5-6741c97eec87", "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1654168139744?alt=media&token=f577b316-c499-4929-b46a-2c2ed7d21b08"],
  //       burn: true,
  //       burnBrand: "abc",
  //       burnCat: "food_and_beverages",
  //       burnCatSub: "Nope",
  //       burnDec: "jhkjhjkhkjh",
  //       burnDecShort: "hkjhjhkjhkjh",
  //       burnHigh: "jhkjhkjhkjhkjh",
  //       burnPic: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1658190356469?alt=media&token=3bd5c29f-1800-4b06-8eea-cde1d1dde42b",
  //       burnPics: ["https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1658190356469?alt=media&token=3bd5c29f-1800-4b06-8eea-cde1d1dde42b"],
  //       burnSpec: "hjkhjkhjkhkjh",
  //       by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //       category: "gfjgjhgjhghjg",
  //       code: "bhkhkhjkhjkqs",
  //       content: true,
  //       cost: 900,
  //       costBurn: 810,
  //       description: "asddasd adasdasdasd",
  //       flash: false,
  //       id: "uWQXKBUU0IvPs419RV9O",
  //       price: 1000,
  //       quota: 0,
  //       relate: [],
  //       reqBurn: false,
  //       sid: "8B9ozj7aTPvywkIvVWiK",
  //       sin: { seconds: 1648679682, nanoseconds: 333000000 },
  //       sold: 0,
  //       storeINFO: {
  //         about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //         addedDynamicLink: true,
  //         banner: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1656594322071?alt=media&token=d50f6ed6-2e67-46a1-8d1b-1e9ef5612e15",
  //         banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=e01954cc-a58e-42dd-a41c-404683e55f2b'],
  //         by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //         cat: "food_and_beverages",
  //         email: "dipeshbhoir@hotmail.com",
  //         id: "8B9ozj7aTPvywkIvVWiK",
  //         loc: [{
  //           area: "Dent Heal",
  //           city: "Mumbai Suburban",
  //           id: "IND_MH_1648672299398",
  //           lat: 19.0662066,
  //           line1: "Dipesadsadas sadasdas",
  //           line2: "",
  //           locality: "Mumbai",
  //           lon: 72.83105909999999,
  //           nation: "IND",
  //           region: "Maharashtra",
  //           state: "MH",
  //           zip: "400050",
  //         },
  //         {
  //           area: "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
  //           city: "Mumbai Suburban",
  //           id: "IND_MH_1656024949912",
  //           lat: 19.134840193193707,
  //           line1: "sadas sadasdasd sdasdas",
  //           line2: "",
  //           locality: "Mumbai",
  //           lon: 72.8213950683594,
  //           nation: "IND",
  //           region: "Maharashtra",
  //           state: "MH",
  //           zip: "400053",
  //         }],
  //         log: { seconds: 1648672299, nanoseconds: 867000000 },
  //         logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1656593787215?alt=media&token=7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
  //         longLinkB1: "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
  //         longLinkV1: "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
  //         longLinkX1: "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
  //         name: "Fit Foods",
  //         phone: "9876543210",
  //         proCat: ['gfjgjhgjhghjg', 'hhkhkjhjk', 'some category', 'Dal', 'Paneer', 'Kolhapuri'],
  //         products: 14,
  //         schedule: {
  //           openFri: true,
  //           openFriE: "23:00",
  //           openFriS: "07:00",
  //           openMon: true,
  //           openMonE: "23:00",
  //           openMonS: "07:00",
  //           openSat: true,
  //           openSatE: "23:00",
  //           openSatS: "07:00",
  //           openSun: false,
  //           openSunE: "23:00",
  //           openSunS: "07:00",
  //           openThu: true,
  //           openThuE: "23:00",
  //           openThuS: "07:00",
  //           openTue: true,
  //           openTueE: "23:00",
  //           openTueS: "07:00",
  //           openWed: true,
  //           openWedE: "23:00",
  //           openWedS: "07:00",
  //           opensDaily: true,
  //           opensDailyE: "23:00",
  //           opensDailyS: "07:00",
  //         },
  //         shareUrlB1: "https://refrclub.com/o/4Yif",
  //         shareUrlV1: "https://refrclub.com/o/tobR",
  //         shareUrlX1: "https://refrclub.com/o/WoQJ",
  //         sin: { seconds: 1648672299, nanoseconds: 867000000 },
  //         subCat: "sc-food_and_beverages-restaurants",
  //         type: "Both",
  //         typeORDER: {
  //           COD: true,
  //           delivery: "Citywide",
  //           exchange: true,
  //           logistics: true,
  //           phoneHide: true,
  //           refund: true,
  //           return: true,
  //         },
  //         upd: { seconds: 1658187576, nanoseconds: 686000000 },
  //         userInfo: {
  //           acBalC: 0,
  //           acBalCr: 0,
  //           acBalGivenC: 0,
  //           acBalGivenV: 0,
  //           acBalH: 20000,
  //           acBalP: 0,
  //           acBalV: 0,
  //           acBalVr: 9000,
  //           addr: [{
  //             address: "129 Master Ali, Murdha Village, Thane",
  //             landmark: "Near Market",
  //             type: "home",
  //             zip: "401101",
  //           }],
  //           admin: true,
  //           axess: ['phone'],
  //           ban: false,
  //           bucket: ['6cZGYy20f5boFbbsXtYB', 'qqMPDmqy0o01YiiIYqaE'],
  //           cashback: 10,
  //           coin: "INR",
  //           display: "",
  //           email: "dipesious@gmail.com",
  //           emailV: false,
  //           emails: [],
  //           iso: "IND",
  //           log: { seconds: 1648670306, nanoseconds: 23000000 },
  //           name: "Dipeshin",
  //           note: [],
  //           phone: "+919876543210",
  //           sin: { seconds: 1648670306, nanoseconds: 23000000 },
  //           soFB: "dipesious",
  //           soIG: "dipesious",
  //           soTW: "dipesious",
  //           soWA: "9876543210",
  //           soYT: "dipesious",
  //           storeCam: ['2GHohG0jEfELHb30c1s7', 'i9MvNIRSZEpyhp05UIws', 'b8fHqM0fyh3EJfGARu3B', '69Hf6TISpLg3SDwpYyKy', '2VS4N7OkRrM5pHfwCNuV', 'GBJPmnJ4Q1oA1ynW1brZ', 'rDeB5DwD97Ff1NpLzFdj', 'vJEzPDAJ5koqdbGa7k0N', 'PJcK0Xh43tLpR44xtB6J', 'FkvmAw4pKGhcSrFULyG2', 'dLclMuk5iBysJvOoWRKi', 'ZPkNWVk1trHm3b8GBr4F', 'iWIXIPHAiDIiA9Euexst', 'SBV6Jpa7a2844xyTxDEO', '1igU0j5Cxxah1ZzYW0oT', 'OgkREW5oDc40YO1psg6q'],
  //           storeLoc: ['8B9ozj7aTPvywkIvVWiK'],
  //           storeSav: ['8B9ozj7aTPvywkIvVWiK'],
  //           uid: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //           upd: { seconds: 1657845041, nanoseconds: 861000000 },
  //         },
  //         vEarn: 2000,
  //         vFan: 120,
  //         vGave: 31397.75,
  //         vOrdr: 120,
  //       },
  //       title: "gffjghfjhfjgjh",
  //       upd: { seconds: 1658190660, nanoseconds: 448000000 },
  //       vX: [
  //         { nowVarient: Array(2), countQ: 1, id: 'uWQXKBUU0IvPs419RV9O' }]
  //     }],
  //     code: null,
  //     com: { seconds: 1658209069, nanoseconds: 599000000 },
  //     earn: 0,
  //     id: "XbaqP2WI1vmQVbKhjW7f",
  //     invoice: { amtRefrCash: 0, COD: true, useRefrCash: false },
  //     journey: "BURN",
  //     logistics: {
  //       addressDrop: { landmark: 'Near Market', address: '129 Master Ali, Murdha Village, Thane', type: 'home', zip: '401101' },
  //       addressDropT: "home",
  //       addressPick: {
  //         nation: 'IND', line1: 'Dipesadsadas sadasdas', line2: '', zip: '400050', region: 'Maharashtra',
  //       },
  //       addressPickT: "shop",
  //       email: "dipesious@gmail.com",
  //       name: "Dipeshin",
  //       phone: "9876543210",
  //       require: false,
  //       status: 20,
  //       typeCat: "food_and_beverages",
  //       typeOrdr: "BURN",
  //       typeShop: "Both",
  //       typeSuCat: "sc-food_and_beverages-restaurants"
  //     },
  //     ordrTYPE: "COD",
  //     refr: null,
  //     sid: "8B9ozj7aTPvywkIvVWiK",
  //     sin: { seconds: 1658209037, nanoseconds: 732000000 },
  //     status: 10,
  //     storeName: "Fit Foods",
  //     to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  //     type: ['COD', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', '8B9ozj7aTPvywkIvVWiK', 'storeORDER', 'clientAc', 'addORDER', 'BURN', null],
  //     upd: { seconds: 1658209037, nanoseconds: 732000000 },
  //     userName: "Dipeshin",
  //   },

  //   //11 index refr cash use
  // ];
  paymentss: Array<any> = [
    {
      storeName: "Fit Foods",
      cart: [],
      amCost: 0,
      amTotal: 1000,
      sin: { seconds: 1657693001, nanoseconds: 480000000 },
      journey: 'DIRECT',
      earn: 20,
      ordrTYPE:"CASH",
      invoice: { amtRefrCash: 0, useRefrCash: false, COD: false },
      refr: null,
    },
    {
      storeName: "Fit Foods",
      cart: [],
      amCost: 980,
      amTotal: 1000,
      sin: { seconds: 1657693001, nanoseconds: 480000000 },
      journey: 'DIRECT',
      earn: 20,
      ordrTYPE: "RefrCASH+ONLINE",
      invoice: { amtRefrCash: 20, useRefrCash: true, COD: false },
      refr: null
    },
    {
      storeName: "Fit Foods",
      cart: [],
      amCost: 980,
      amTotal: 1000,
      sin: { seconds: 1657693001, nanoseconds: 480000000 },
      journey: 'F2F',
      earn: 20,
      ordrTYPE: "CASH",
      invoice: { amtRefrCash: 0, useRefrCash: false, COD: false },
      refr: { uid: 'IyEevcZAKPXRtc2IL3njhvvk8ly2', name: 'Shrads', earn: 50 }
    },
    {
      storeName: "Fit Foods",
      cart: ["sadasdasd"],
      amCost: 980,
      amTotal: 1000,
      sin: { seconds: 1657693001, nanoseconds: 480000000 },
      journey: 'F2F',
      earn: 20,
      ordrTYPE: "RefrCASH+ONLINE",
      invoice: { amtRefrCash: 20, useRefrCash: true, COD: false },
      refr: { uid: 'IyEevcZAKPXRtc2IL3njhvvk8ly2', name: 'Shrads', earn: 50 }
    },
    {
      storeName: "Fit Foods",
      cart: ["sadasdasd"],
      amCost: 0,
      amTotal: 1000,
      sin: { seconds: 1657693001, nanoseconds: 480000000 },
      journey: 'F2F',
      earn: 20,
      ordrTYPE:"ONLINE",
      invoice: { amtRefrCash: 0, useRefrCash: false, COD: false },
      refr: null,
    },
    {
      storeName: "Fit Foods",
      cart: [],
      amCost: 980,
      amTotal: 1000,
      sin: { seconds: 1657693001, nanoseconds: 480000000 },
      journey: 'F2F',
      earn: 20,
      ordrTYPE: "RefrCASH+ONLINE",
      invoice: { amtRefrCash: 20, useRefrCash: true, COD: false },
      refr: null
    },
    {
      storeName: "Fit Foods",
      cart: ["sadasdasd"],
      amCost: 980,
      amTotal: 1000,
      sin: { seconds: 1657693001, nanoseconds: 480000000 },
      journey: 'F2F',
      earn: 20,
      ordrTYPE: "CASH",
      invoice: { amtRefrCash: 0, useRefrCash: false, COD: false },
      refr: { uid: 'IyEevcZAKPXRtc2IL3njhvvk8ly2', name: 'Shrads', earn: 50 }
    },
    {
      storeName: "Fit Foods",
      cart: ["sadasdasd"],
      amCost: 980,
      amTotal: 1000,
      sin: { seconds: 1657693001, nanoseconds: 480000000 },
      journey: 'BURN',
      earn: 20,
      ordrTYPE: "RefrCASH+ONLINE",
      invoice: { amtRefrCash: 20, useRefrCash: true, COD: false },
      refr: { uid: 'IyEevcZAKPXRtc2IL3njhvvk8ly2', name: 'Shrads', earn: 50 }
    },

  ]
  constructor() {
    console.log(this.paymentss)
   }

  ngOnInit(): void {
  }

}