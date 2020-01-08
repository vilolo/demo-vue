<template>
    <div>
        <hr>
        <h2>1. init</h2>
        <button @click="openUrl(urlList.toolUrls, '')">Open tool Url</button>
        <hr>

        <h2>2. find keyword by category</h2>
        <button @click="openUrl(urlList.categoryUrls)">Open category Reference</button>
        <br><br>
        <input v-model="categoryKey" placeholder="category">
        <button @click="openUrl(urlList.categoryKeywordUrls, categoryKey)">Open category Url</button>
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

            urlList: urlList
        }
    },
    methods: {
        openUrl: function(urlList, keyword){
            if (typeof(keyword) == undefined){
                keyword = ''
            }
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
        }
    },
    mounted: function(){
    }
}  
</script>