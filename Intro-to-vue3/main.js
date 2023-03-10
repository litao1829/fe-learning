const app=Vue.createApp({
    data(){
        return {
            attri:'class',
            product:'Socks',
            description:'A warm fuzzy pair of socks.',
            image:'./assets/images/socks_blue.jpg',
            url:'https://cn.vuejs.org/',
            count:10,
            // rawHtml:'<span style="color: red ;border: 1px solid">This should be red.</span>',
            inStock:true,
            inventory:5,
            onSale:true,
            disable:false,
            details:['50% cotton','30% wool','20% polyester'],
            size:['S','M','L','XL'],
            variants:[
                {id:2234,color:'green'},
                {id:2235,color:'blue'}
            ],
        }
    },
    methods:{

    },
    attri()
    {
        return this.attri;
    }
});

