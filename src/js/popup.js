Vue.config.debug = true;
window.onload = function() {
  new Vue({
    el: '#app',
    data: {
      toolMode: '莫尔斯电码',
      versionText: '版本 0.1.2',
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
      base64: {
        text: '',
        encode: function() {
          this.text = btoa(this.text);
        },
        decode: function() {
          this.text = atob(this.text);
        }
      },
      iChing: {
        text: '',
        encodeMap: {
          'A': '坤',
          'B': '剥',
          'C': '比',
          'D': '观',
          'E': '豫',
          'F': '晋',
          'G': '萃',
          'H': '否',
          'I': '谦',
          'J': '艮',
          'K': '蹇',
          'L': '渐',
          'M': '小过',
          'N': '旅',
          'O': '咸',
          'P': '遁',
          'Q': '师',
          'R': '蒙',
          'S': '坎',
          'T': '涣',
          'U': '解',
          'V': '未济',
          'W': '困',
          'X': '讼',
          'Y': '升',
          'Z': '蛊',
          'a': '井',
          'b': '巽',
          'c': '恒',
          'd': '鼎',
          'e': '大过',
          'f': '姤',
          'g': '复',
          'h': '颐',
          'i': '屯',
          'j': '益',
          'k': '震',
          'l': '噬嗑',
          'm': '随',
          'n': '无妄',
          'o': '明夷',
          'p': '贲',
          'q': '既济',
          'r': '家人',
          's': '丰',
          't': '离',
          'u': '革',
          'v': '同人',
          'w': '临',
          'x': '损',
          'y': '节',
          'z': '中孚',
          '0': '归妹',
          '1': '睽',
          '2': '兑',
          '3': '履',
          '4': '泰',
          '5': '大畜',
          '6': '需',
          '7': '小畜',
          '8': '大壮',
          '9': '大有',
          '+': '夬',
          '/': '乾'
        },
        decodeMap: {},
        encode: function() {
          var arr = this.text;
          var res_arr = [];
          for (var x in arr) {
            if (this.encodeMap[arr[x]] !== undefined) {
              res_arr.push(this.encodeMap[arr[x]]);
            }
          }
          this.text = res_arr.join("");
        },
        decode: function() {
          for (var key in this.encodeMap) {
            if (this.encodeMap.hasOwnProperty(key)) {
              this.decodeMap[this.encodeMap[key]] = key;
            }
          }
          var arr = this.text;
          var res_arr = [];
          for (var x in arr) {
            if (this.decodeMap[arr[x]] !== undefined) {
              res_arr.push(this.decodeMap[arr[x]]);
            } else if (this.decodeMap[arr[x]+arr[parseInt(x)+1]] !== undefined) {
              res_arr.push(this.decodeMap[arr[x]+arr[parseInt(x)+1]]);
            }
          }
          this.text = res_arr.join("");
        }
      }
    }
  });
};
