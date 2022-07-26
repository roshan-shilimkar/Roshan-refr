import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-wallet',
  templateUrl: './vendor-wallet.component.html',
  styleUrls: ['./vendor-wallet.component.scss']
})
export class VendorWalletComponent implements OnInit {
  payments$: Observable<any> = of();
  activated: number = 1;
  shownGroup: any = null;
  shownGroupchild: any = null;
  paymentsarr: Array<any> = [
    //this transaction is with campa refile 
    {
      amCost: 500,
      amGive: 500,
      amPaid: 500,
      amRate: { cutRate: 0, refill: 500, pay: 500, cut: 0 },
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      com: { seconds: 1658415094, nanoseconds: 724000000 },
      id: "AsUG3vP9DDzVjEAMtiTP",
      sin: { seconds: 1658415094, nanoseconds: 724000000 },
      status: 10,
      to: "Δ",
      type: ["addBalance"
        , "campaignBalance"
        , "vendorAc"
        , "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
        , "Dipeshin"
        , "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
        , "admin"],
      upd: { seconds: 1658415094, nanoseconds: 724000000 },
      via: { name: 'Dipeshin', by: 'zn99lfRpB4bDy4KBvu4K1QpSMBk2' }
    },
    // this transaction is with refr cashback to user and his frnd
    {
      amCost: 340000,
      amSale: 360000,
      amSave: 20000,
      amTotal: 340000,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "IyEevcZAKPXRtc2IL3njhvvk8ly2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1661884200, nanoseconds: 0 },
        dateS: { seconds: 1656613800, nanoseconds: 0 },
        expiry: false.valueOf,
        id: "0I5ENSmAdYN5T3R4SAmh",
        max: 0,
        min: 800,
        name: "Campaign-1",
        paid: false,
        paused: false,
        sid: "tbIAPbpX7BvwFSyHxgGl",
        sin: { seconds: 1656600761, nanoseconds: 109000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1656600761, nanoseconds: 109000000 },
      },
      cart: [{
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=545f0b0a-77f4-406d-ba37-1bef646b4406'],
        burn: false,
        by: "IyEevcZAKPXRtc2IL3njhvvk8ly2",
        category: "Mobiles",
        code: "2626",
        content: true,
        cost: 85000,
        description: "Mac Book ",
        id: "k51kESZnivxiukKZ1uNZ",
        price: 90000,
        quota: 0,
        reqBurn: false,
        sid: "tbIAPbpX7BvwFSyHxgGl",
        sin: { seconds: 1657975368, nanoseconds: 385000000 },
        sold: 0,
        title: "Laptop",
        upd: { seconds: 1657975368, nanoseconds: 385000000 },
        vX: [],
        variants: [],
        warranty: true,
      }],
      code: "A00013",
      com: { seconds: 1657977546, nanoseconds: 686000000 },
      done: { seconds: 1657978107, nanoseconds: 110000000 },
      earn: 100,
      id: "MlnAdzIpbUo0oKzxtOcu",
      invoice: { amtRefrCash: 0, COD: true, useRefrCash: false },
      journey: "F2F",
      logistics: {
        addressDrop: { address: '129 Master Ali, Murdha Village, Thane', zip: '401101', type: 'home', landmark: 'Near Market' },
        addressDropT: "home",
        addressPick: {
          area: "Leena rwsid",
          city: "Mumbai Suburban",
          id: "IND_MH_1656600707742",
          lat: 19.1130712,
          line1: "101 ",
          line2: "",
          locality: "Mumbai",
          lon: 72.83688649999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400056",
        },
        addressPickT: "shop",
        email: "dipesious@gmail.com",
        name: "Dipeshin",
        phone: "9876543210",
        require: false,
        status: 20,
        typeCat: "electronics",
        typeOrdr: "F2F_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-electronics-mobile_phones",
      },
      ordrTYPE: "COD",
      refr: { name: 'Shraddha ', earn: 50, uid: 'GdViTqOv51YIsNxHV58LpXpx99n1' },
      sid: "tbIAPbpX7BvwFSyHxgGl",
      sin: { seconds: 1657977433, nanoseconds: 273000000 },
      status: 10,
      storeName: "Gada Electronics  ",
      to: "IyEevcZAKPXRtc2IL3njhvvk8ly2",
      type: ['COD', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', 'IyEevcZAKPXRtc2IL3njhvvk8ly2', 'tbIAPbpX7BvwFSyHxgGl', 'addORDER', 'storeORDER', 'clientAc', 'F2F', 'A00013'],
      upd: { seconds: 1657977433, nanoseconds: 273000000 },
      userName: "Dipeshin",
    },
    // this transaction is with refr cashback to user Only
    {
      amCost: 0,
      amSale: 1495,
      amSave: 1495,
      amTotal: 1245,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1660329000, nanoseconds: 0 },
        dateS: { seconds: 1657650600, nanoseconds: 0 },
        expiry: false,
        id: "ZPkNWVk1trHm3b8GBr4F",
        max: 0,
        min: 999,
        name: "Campaign-12",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1657693001, nanoseconds: 480000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1657693001, nanoseconds: 480000000 },
      },
      cart: [{
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Dal",
        code: "21069099",
        content: true,
        cost: 249,
        description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
        id: "h25O95gX19QwOYWqprXx",
        price: 299,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594533, nanoseconds: 801000000 },
        sold: 0,
        title: "Dal Tadka ",
        upd: { seconds: 1656595043, nanoseconds: 979000000 },
        vX: [],
        variants: [],
        warranty: true
      }],
      code: null,
      com: { seconds: 1657977905, nanoseconds: 859000000 },
      done: { seconds: 1657978117, nanoseconds: 569000000 },
      earn: 25,
      id: "FOjZg4wqI4OVzXOCtMug",
      invoice: { useRefrCash: true, COD: false, amtRefrCash: 1245 },
      journey: "DIRECT",
      logistics: {
        addressDrop: {
          address: "129 Master Ali, Murdha Village, Thane",
          landmark: "Near Market",
          type: "home",
          zip: "401101"
        },
        addressDropT: 'home',
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        addressPickT: "shop",
        email: "dipesious@gmail.com",
        name: "Dipeshin",
        phone: "9876543210",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants",
      },
      ordrTYPE: "RefrCASH",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1657977826, nanoseconds: 684000000 },
      status: 10,
      storeName: "Fit Foods",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: ['RefrCASH', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', '8B9ozj7aTPvywkIvVWiK', 'addORDER', 'storeORDER', 'clientAc', 'DIRECT'],
      upd: { seconds: 1657977826, nanoseconds: 684000000 },
      userName: "Dipeshin",
    },
    {
      amCost: 900,
      amSale: 1000,
      amSave: 100,
      amTotal: 900,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: null,
      cart: [{
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=93ee264a-8086-4ec4-adf5-6741c97eec87', 'https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=f577b316-c499-4929-b46a-2c2ed7d21b08'],
        burn: true,
        burnBrand: "abc",
        burnCat: "food_and_beverages",
        burnCatSub: "Nope",
        burnDec: "jhkjhjkhkjh",
        burnDecShort: "hkjhjhkjhkjh",
        burnHigh: "jhkjhkjhkjhkjh",
        burnPic: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1658190356469?alt=media&token=3bd5c29f-1800-4b06-8eea-cde1d1dde42b",
        burnPics: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3bd5c29f-1800-4b06-8eea-cde1d1dde42b'],
        burnSpec: "hjkhjkhjkhkjh",
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "gfjgjhgjhghjg",
        code: "bhkhkhjkhjkqs",
        content: true,
        cost: 900,
        costBurn: 810,
        description: "asddasd adasdasdasd",
        flash: false,
        id: "uWQXKBUU0IvPs419RV9O",
        price: 1000,
        quota: 0,
        relate: [],
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1648679682, nanoseconds: 333000000 },
        sold: 0,
        storeINFO: {
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          addedDynamicLink: true,
          banner: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1656594322071?alt=media&token=d50f6ed6-2e67-46a1-8d1b-1e9ef5612e15",
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=e01954cc-a58e-42dd-a41c-404683e55f2b'],
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          cat: "food_and_beverages",
          email: "dipeshbhoir@hotmail.com",
          id: "8B9ozj7aTPvywkIvVWiK",
          loc: [{
            area: "Dent Heal",
            city: "Mumbai Suburban",
            id: "IND_MH_1648672299398",
            lat: 19.0662066,
            line1: "Dipesadsadas sadasdas",
            line2: "",
            locality: "Mumbai",
            lon: 72.83105909999999,
            nation: "IND",
            region: "Maharashtra",
            state: "MH",
            zip: "400050",
          },
          {
            area: "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
            city: "Mumbai Suburban",
            id: "IND_MH_1656024949912",
            lat: 19.134840193193707,
            line1: "sadas sadasdasd sdasdas",
            line2: "",
            locality: "Mumbai",
            lon: 72.8213950683594,
            nation: "IND",
            region: "Maharashtra",
            state: "MH",
            zip: "400053",
          }],
          log: { seconds: 1648672299, nanoseconds: 867000000 },
          logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1656593787215?alt=media&token=7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
          longLinkB1: "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
          longLinkV1: "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
          longLinkX1: "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
          name: "Fit Foods",
          phone: "9876543210",
          proCat: ['gfjgjhgjhghjg', 'hhkhkjhjk', 'some category', 'Dal', 'Paneer', 'Kolhapuri'],
          products: 14,
          schedule: {
            openFri: true,
            openFriE: "23:00",
            openFriS: "07:00",
            openMon: true,
            openMonE: "23:00",
            openMonS: "07:00",
            openSat: true,
            openSatE: "23:00",
            openSatS: "07:00",
            openSun: false,
            openSunE: "23:00",
            openSunS: "07:00",
            openThu: true,
            openThuE: "23:00",
            openThuS: "07:00",
            openTue: true,
            openTueE: "23:00",
            openTueS: "07:00",
            openWed: true,
            openWedE: "23:00",
            openWedS: "07:00",
            opensDaily: true,
            opensDailyE: "23:00",
            opensDailyS: "07:00",
          },
          shareUrlB1: "https://refrclub.com/o/4Yif",
          shareUrlV1: "https://refrclub.com/o/tobR",
          shareUrlX1: "https://refrclub.com/o/WoQJ",
          sin: { seconds: 1648672299, nanoseconds: 867000000 },
          subCat: "sc-food_and_beverages-restaurants",
          type: "Both",
          typeORDER: {
            COD: true,
            delivery: "Citywide",
            exchange: true,
            logistics: true,
            phoneHide: true,
            refund: true,
            return: true,
          },
          upd: { seconds: 1658187576, nanoseconds: 686000000 },
          userInfo: {
            acBalC: 0,
            acBalCr: 0,
            acBalGivenC: 0,
            acBalGivenV: 0,
            acBalH: 20000,
            acBalP: 0,
            acBalV: 0,
            acBalVr: 9000,
            addr: [{
              type: 'home', zip: '401101', address: '129 Master Ali, Murdha Village, Thane', landmark: 'Near Market'
            }],
            admin: true,
            axess: ['phone'],
            ban: false,
            bucket: ['6cZGYy20f5boFbbsXtYB', 'qqMPDmqy0o01YiiIYqaE'],
            cashback: 10,
            coin: "INR",
            display: "",
            email: "dipesious@gmail.com",
            emailV: false,
            emails: [],
            iso: "IND",
            log: { seconds: 1648670306, nanoseconds: 23000000 },
            name: "Dipeshin",
            note: [],
            phone: "+919876543210",
            sin: { seconds: 1648670306, nanoseconds: 23000000 },
            soFB: "dipesious",
            soIG: "dipesious",
            soTW: "dipesious",
            soWA: "9876543210",
            soYT: "dipesious",
            storeCam: ['2GHohG0jEfELHb30c1s7', 'i9MvNIRSZEpyhp05UIws', 'b8fHqM0fyh3EJfGARu3B', '69Hf6TISpLg3SDwpYyKy', '2VS4N7OkRrM5pHfwCNuV', 'GBJPmnJ4Q1oA1ynW1brZ', 'rDeB5DwD97Ff1NpLzFdj', 'vJEzPDAJ5koqdbGa7k0N', 'PJcK0Xh43tLpR44xtB6J', 'FkvmAw4pKGhcSrFULyG2', 'dLclMuk5iBysJvOoWRKi', 'ZPkNWVk1trHm3b8GBr4F', 'iWIXIPHAiDIiA9Euexst', 'SBV6Jpa7a2844xyTxDEO', '1igU0j5Cxxah1ZzYW0oT', 'OgkREW5oDc40YO1psg6q'],
            storeLoc: ['8B9ozj7aTPvywkIvVWiK'],
            storeSav: ['8B9ozj7aTPvywkIvVWiK'],
            uid: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            upd: { seconds: 1657845041, nanoseconds: 861000000 },
          },
          vEarn: 2000,
          vFan: 120,
          vGave: 31397.75,
          vOrdr: 120,
        },
        title: "gffjghfjhfjgjh",
        upd: { seconds: 1658190660, nanoseconds: 448000000 },
        vX: [{ id: 'uWQXKBUU0IvPs419RV9O', countQ: 1, nowVarient: Array(2) }],
        variants: [{ name: 'XL', type: 'size' }, { type: 'palete', name: '#ff0000' }, { type: 'palete', name: '#ffa500' }, { name: '#ffff00', type: 'palete' }, { name: '#008000', type: 'palete' }],
        warranty: true
      }],
      code: null,
      com: { seconds: 1658209069, nanoseconds: 599000000 },
      earn: 0,
      id: "XbaqP2WI1vmQVbKhjW7f",
      invoice: { useRefrCash: false, amtRefrCash: 0, COD: true },
      journey: "BURN",
      logistics: {
        addressDrop: { type: 'home', landmark: 'Near Market', zip: '401101', address: '129 Master Ali, Murdha Village, Thane' },
        addressDropT: "home",
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        addressPickT: "shop",
        email: "dipesious@gmail.com",
        name: "Dipeshin",
        phone: "9876543210",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "BURN",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants",
      },
      ordrTYPE: "COD",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1658209037, nanoseconds: 732000000 },
      status: 10,
      storeName: "Fit Foods",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: ['COD', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', '8B9ozj7aTPvywkIvVWiK', 'storeORDER', 'clientAc', 'addORDER', 'BURN', null],
      upd: { seconds: 1658209037, nanoseconds: 732000000 },
      userName: "Dipeshin",

    },
    //
    {
      amCost: 200,
      amSale: 800,
      amSave: 600,
      amTotal: 800,
      by: "JTEkZBCuZfQ8bTJuf4rEwmA4k6n2",
      camp: {
        ban: false,
        by: "IyEevcZAKPXRtc2IL3njhvvk8ly2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1661884200, nanoseconds: 0 },
        dateS: { seconds: 1656613800, nanoseconds: 0 },
        expiry: false,
        id: "0I5ENSmAdYN5T3R4SAmh",
        max: 0,
        min: 800,
        name: "Campaign-1",
        paid: false,
        paused: false,
        sid: "tbIAPbpX7BvwFSyHxgGl",
        sin: { seconds: 1656600761, nanoseconds: 109000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1656600761, nanoseconds: 109000000 },
      },
      cart: [{
        banners: ['"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FShffv8srIQW0phiFjzOv1657978187465?alt=media&token=1848b3a7-fd15-46e1-86da-34da78c5de4d"'],
        burn: false,
        by: "IyEevcZAKPXRtc2IL3njhvvk8ly2",
        category: "Mobiles",
        code: "262",
        content: true,
        cost: 200,
        description: "Whsbs",
        id: "Shffv8srIQW0phiFjzOv",
        price: 200,
        quota: 0,
        reqBurn: false,
        sid: "tbIAPbpX7BvwFSyHxgGl",
        sin: { seconds: 1657978187, nanoseconds: 489000000 },
        sold: 0,
        title: "Pipe",
        upd: { seconds: 1657978187, nanoseconds: 489000000 },
        vX: [],
        variants: [],
        warranty: true,
      }],
      code: null,
      com: { seconds: 1658477363, nanoseconds: 448000000 },
      earn: 25,
      gwID: "pay_JwLBnQ0WSD3fQo",
      gwInfo: {
        acquirer_data: { rrn: '220390769592' },
        amount: 20000,
        amount_refunded: 0,
        bank: null,
        captured: true,
        card_id: null,
        contact: "+919619083027",
        created_at: 1658477395,
        currency: "INR",
        description: "payment to Gada Electronics  ",
        email: "simrankapahi@gmail.com",
        entity: "payment",
        error_code: null,
        error_description: null,
        error_reason: null,
        error_source: null,
        error_step: null,
        fee: 472,
        id: "pay_JwLBnQ0WSD3fQo",
        international: false,
        invoice_id: null,
        method: "upi",
        notes: { description: 'descriptionX' },
        order_id: "order_JwLBI1OrdkZ2OY",
        refund_status: null,
        status: "captured",
        tax: 72,
        vpa: "simrankapahi@okicici",
        wallet: null
      },
      gwORDR: "order_JwLBI1OrdkZ2OY",
      gwSIGN: "9259c19ebde27f05475cae5eb02095bbb50f1c3ebe9b0402aaf95c13f4b67c75",
      id: "3sbZUpaL9eOtXu14c6RF",
      invoice: { COD: false, useRefrCash: true, amtRefrCash: 600 },
      journey: "DIRECT",
      logistics: {
        addressDrop: { zip: 400053, address: 'Shsh', landmark: 'Uwha', type: 'home' },
        addressDropT: "home",
        addressPick: {
          area: "Leena rwsid",
          city: "Mumbai Suburban",
          id: "IND_MH_1656600707742",
          lat: 19.1130712,
          line1: "101 ",
          line2: "",
          locality: "Mumbai",
          lon: 72.83688649999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400056",
        },
        addressPickT: "shop",
        email: "",
        name: "Simran",
        phone: "9619083027",
        require: false,
        status: 0,
        typeCat: "electronics",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-electronics-mobile_phones",
      },
      ordrTYPE: "RefrCASH+ONLINE",
      refr: null,
      sid: "tbIAPbpX7BvwFSyHxgGl",
      sin: { seconds: 1658477363, nanoseconds: 448000000 },
      status: 10,
      storeName: "Gada Electronics  ",
      to: "IyEevcZAKPXRtc2IL3njhvvk8ly2",
      type: [
        "RefrCASH+ONLINE"
        , "JTEkZBCuZfQ8bTJuf4rEwmA4k6n2"
        , "IyEevcZAKPXRtc2IL3njhvvk8ly2"
        , "tbIAPbpX7BvwFSyHxgGl"
        , "addORDER"
        , "storeORDER"
        , "clientAc"
        , "DIRECT"
      ],
      upd: { seconds: 1658477363, nanoseconds: 448000000 },
      userName: "Simran",
    }
  ];

  constructor() {
  }

  ngOnInit(): void {

  }


  toggleGroup(group: number) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    }
    else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group: any) {
    return this.shownGroup === group;
  }

  toggleGroupchild(group: number) {
    if (this.isGroupShownchild(group)) {
      this.shownGroupchild = null;
    }
    else {
      this.shownGroupchild = group;
    }
  }

  isGroupShownchild(group: any) {
    return this.shownGroupchild === group;
  }
}