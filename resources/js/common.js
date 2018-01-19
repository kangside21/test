'use strict';

var common = common || function(g,i) {
    
    var ajax = function(url, params, method) {
        return new Promise(function (resolve, reject) {
            if (isNull(url) ||
                (isNotNull(method) &&
                (method.toUpperCase()!="GET" && method.toUpperCase()!="POST" &&
                    method.toUpperCase()!="PUT" && method.toUpperCase()!="DELETE"))) {
                reject(Error("URL이 없음"));
            }
            else {
                var json = null;
                if ((isNotNull(method) && method.toUpperCase()=="POST") && params != null) {
                    json = JSON.stringify(params);
                }
                else if ((isNull(method) || method.toUpperCase()=="GET") && params != null) {
                    json = "";
                    Object.keys(params).forEach(function(key, index) {
                        if (index==0) json+="?";
                        json+=key+"="+params[key];
                        if (index+1 != Object.keys(params).length) json+="&";
                    });
                }

                var xhr = new XMLHttpRequest();
                xhr.open(isNotNull(method) ? method.toUpperCase() :"GET", ((isNull(method) || method.toUpperCase()=="GET") && isNotNull(json)) ? url+json : url, true);
                xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                xhr.responseType = 'json';
                xhr.onreadystatechange = function () {
                    if(xhr.readyState == XMLHttpRequest.DONE) {
                        if (xhr.status == 200) {
                            console.log(xhr.response);
                            resolve(xhr.response);
                        }
                        else {
                            alert("실패");
                        }
                    }
                };
                xhr.send((isNotNull(method) &&  method.toUpperCase()=="POST") ? json : null);    
            }
        });
    };

    /**
     * NULL 체크
     */
    var isNull = function(str) {
        if (typeof str === "undefined" || str == null) {
            return true;
        }

        if (typeof str === "string" && trim(str) == "") {
            return true;
        }

        return false;
    };

    /**
     * NOT NULL 체크
     */
    var isNotNull = function(str) {
        if (typeof str != "undefined" && str != null && String(str) !=  "") {
            return true;
        }
        return false;
    };

    /**
     * 공백제거
     */
    var trim = function(str) {
        if (typeof str === "string") {
            return str.replace(/^\s+/, "");
        }
        else {
            return str;
        }
    };

    return {
        ajax : ajax,
        isNull : isNull,
        isNotNull : isNotNull,
        trim : trim
    };

}();