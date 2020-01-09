<template>
    <div>
        <hr>
        <h2>1. init & Scenery</h2>
        <button @click="openUrl(urlList.toolUrls, '')">Open publish tool Url</button>
        <hr>

        <h2>2. find keyword by category</h2>
        <button @click="openUrl(urlList.categoryUrls)">Open category Reference</button>
        <br><br>

        <select @change="myChangeOne">
            <option v-for="(item, index) in my_c_1" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select @change="myChangeTwo">
            <option v-for="(item, index) in my_c_2" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select v-model="my_3_val">
            <option v-for="(item, index) in my_c_3" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <button @click="openUrl(urlList.myCategoryCodeUrl, my_3_val)">Open M category Url</button>
        <br><br>

        <select @change="twChangeOne">
            <option v-for="(item, index) in tw_c_1" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select @change="twChangeTwo">
            <option v-for="(item, index) in tw_c_2" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select v-model="tw_3_val"  @change="twChangeThree">
            <option v-for="(item, index) in tw_c_3" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <select v-model="tw_4_val">
            <option v-for="(item, index) in tw_c_4" :value="item" v-bind:key="index">{{index}}</option>
        </select>
        <button @click="openUrl(urlList.twCategoryCodeUrl, tw_4_val?tw_4_val:tw_3_val)">Open T category Url</button>
        <br><br>

        <!-- <a :href="urlList.myCategoryListUrl" target="_blank"><button>open MY category list</button></a> 
        <a :href="urlList.twCategoryListUrl" target="_blank"><button>open TW category list</button></a>
        <br><br>

        <input v-model="categoryKey" placeholder="category">
        <button @click="openUrl(urlList.categoryKeywordUrls, categoryKey)">Open category Url by key</button> -->
        <hr>

        <h2>3. Open Multiple keywords to choose one</h2>
        <textarea class="tbox" rows="10" cols="100"/>
        <button @click="openKeywords(1)">Open M</button>&nbsp;&nbsp;&nbsp;&nbsp;<button @click="openKeywords()">Open T</button>
        <hr>

        <h2>4. check keyword</h2>
        <input v-model="enKeyword" placeholder="en">
        <button @click="openUrl(urlList.enKeywordUrls, enKeyword)">Open en keyword Url</button>
        <br><br>
        <input v-model="cnKeyword" placeholder="zh-Simplified">
        <button @click="openUrl(urlList.cnKeywordUrls, cnKeyword)">Open cn keyword Url</button>
        <br><br>
        <input v-model="fantiKeyword" placeholder="zh-Traditional">
        <button @click="openUrl(urlList.fantiKeywordUrls, fantiKeyword)">Open fanti keyword Url</button>
        <br><br>
        <button @click="openKeywordAll()">Open all</button>
        <hr>
    </div>
</template>
<script>
require('../data/urlList')
require('../data/category')
require('../assets/js/gbk')
export default {
    data: function(){
        return {
            // ========== en =================
            enKeyword: '',

            // ========== cn =================
            cnKeyword: '',

            // ========== fanti =================
            fantiKeyword: '',

            // ========== categoryKey ===========
            categoryKey: '',

            urlList: urlList,

            tw_c: tw_c,
            tw_c_1: tw_c[0],
            tw_c_2: {},
            tw_c_3: {},
            tw_c_4: {},
            tw_3_val: '',
            tw_4_val: '',

            my_c: my_c,
            my_c_1: my_c[0],
            my_c_2: {},
            my_c_3: {},
            my_3_val: '',
        }
    },
    methods: {
        openUrl: function(urlList, keyword){
            if (typeof(keyword) == undefined){
                keyword = ''
            }
            keyword = $URL.encode(keyword)
            for (let item in urlList) {
                window.open(urlList[item].replace('@keyword@', keyword))
            }
        },
        openKeywordAll: function(){
            this.openUrl(urlList.enKeywordUrls, this.enKeyword)
            this.openUrl(urlList.cnKeywordUrls, this.cnKeyword)
            this.openUrl(urlList.fantiKeywordUrls, this.fantiKeyword)
        },
        openKeywords: function(isMy){
            let url = ''
            if(isMy){
                url = urlList.mUrl
            }else{
                url = urlList.tUrl
            }

            let val = $('.tbox').val();
            if (val){
                let vlist = $('.tbox').val().split("\n");

                for(let i=0; i<vlist.length; i++){
                    let words = vlist[i].replace(/(^\s*)|(\s*$)/g, "");
                    if (words){
                        let src = url+"?keyword="+words;
                        window.open(src).location;
                    }
                    
                }
            }
        },

        myChangeOne: function(val){
            this.my_c_3 = {}
            this.my_c_2 = my_c[val.target.value]
        },
        myChangeTwo: function(val){
            this.my_c_3 = {}
            this.my_c_3 = my_c[val.target.value]
        },

        twChangeOne: function(val){
            console.log(val.target.value)
            this.tw_c_3 = {}
            this.tw_c_4 = {}
            this.tw_c_2 = tw_c[val.target.value]
            
        },
        twChangeTwo: function(val){
            this.tw_c_4 = {}
            this.tw_c_3 = tw_c[val.target.value]
        },
        twChangeThree: function(val){
            console.log(val.target.value)
            this.tw_c_4 = tw_c[val.target.value]
        },
    },
    mounted: function(){
    },
    computed: {
    }
}  
</script>