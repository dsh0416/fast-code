Vue.config.debug = true;
window.onload = function() {
  new Vue({
    el: '#app',
    data: {
      toolMode: '莫尔斯电码',
      versionText: '版本 0.1.1',
      morse: {
        text: '',
        encodeMap: {
          "a": "._",
          "b": "_...",
          "c": "_._.",
          "d": "_..",
          "e": ".",
          "f": ".._.",
          "g": "__.",
          "h": "....",
          "i": "..",
          "j": ".___",
          "k": "_._",
          "l": "._..",
          "m": "__",
          "n": "_.",
          "o": "___",
          "p": ".__.",
          "q": "__._",
          "r": "._.",
          "s": "...",
          "t": "_",
          "u": ".._",
          "v": "..._",
          "w": ".__",
          "x": "_.._",
          "y": "_.__",
          "z": "__..",
          " ": " ",
          "1": ".____",
          "2": "..___",
          "3": "...__",
          "4": "...._",
          "5": ".....",
          "6": "_....",
          "7": "__...",
          "8": "___..",
          "9": "____.",
          "0": "_____",
          /*
           * Note: Some operators prefer "!" as "___." and others as "_._.__"
           * ARRL message format has most punctuation spelled out, as many symbols'
           * encodings conflict with procedural signals (e.g. "=" and "BT").
           */
          ".": "._._._",
          ",": "__..__",
          "?": "..__..",
          "'": ".____.",
          "/": "_.._.",
          "(": "_.__.",
          ")": "_.__._",
          "&": "._...",
          ":": "___...",
          ";": "_._._.",
          "=": "_..._",
          "+": "._._.",
          "-": "_...._",
          "_": "..__._",
          "\"": "._.._.",
          "$": "..._.._",
          "!": "_._.__",
          "@": ".__._."
        },
        decodeMap: {},
        encode: function() {
          var arr = this.text.toLowerCase();
          var res_arr = [];
          for (var x in arr) {
            if (this.encodeMap[arr[x]] !== undefined) {
              res_arr.push(this.encodeMap[arr[x]]);
            }
          }
          this.text = res_arr.join(" ");
        },
        decode: function() {
          for (var key in this.encodeMap) {
            if (this.encodeMap.hasOwnProperty(key)) {
              this.decodeMap[this.encodeMap[key]] = key;
            }
          }
          var arr = this.text.split(/[ \/]/);
          var res_arr = [];
          for (var x in arr) {
            if (this.decodeMap[arr[x]] !== undefined) {
              res_arr.push(this.decodeMap[arr[x]]);
            }
          }
          this.text = res_arr.join("");
        }
      },
      base64:{
        text: '',
        encode: function(){
          this.text = btoa(this.text);
        },
        decode: function(){
          this.text = atob(this.text);
        }
      }
    }
  });
};
